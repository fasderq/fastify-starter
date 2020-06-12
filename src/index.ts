import { config } from 'dotenv';
import { Application } from '@app/application';
import { ConfigLoader } from './config';
import { EnvHelper } from './utils';
import { ENV } from '@types';


const configPath: string = './config/config.yml';

const env: ENV = EnvHelper.getNodeEnv();

if (env === 'development') {
    config({ path: '.env' });
}

if (env === 'test') {
    config({ path: '.env.test' });
}

const opts = ConfigLoader.load(configPath);

const app = new Application(opts);

app.run()
    .then((): void => {
        console.log('app started');
    })
    .catch((error: Error): void => {
        console.error(error)
    });
