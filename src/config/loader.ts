import { safeLoad } from 'js-yaml';
import { render as ejsRender } from 'ejs';
import {
    promises as fs,
    readFileSync,
} from 'fs';
import { ApplicationOptions } from '@types';

const { readFile } = fs;

export class ConfigLoader {

    public static async loadAsync(path: string): Promise<ApplicationOptions> {
        return safeLoad(
            ejsRender(
                await readFile(
                    path,
                    { encoding: 'utf8' }
                ),
                { env: process.env }
            )
        );
    }

    public static load(path: string): ApplicationOptions {
        return safeLoad(
            ejsRender(
                readFileSync(
                    path,
                    { encoding: 'utf8' }
                ),
                { env: process.env }
            )
        );
    }
}
