import { config } from 'dotenv';
import { Application } from '@app/application';
import { ConfigLoader } from './config';
import { EnvHelper } from './utils';
import { ENV } from '@types';

const env: ENV = EnvHelper.getNodeEnv();

if (!['production', 'stage'].includes(env)) {
    config({ path: '.env' });
}

const opts = ConfigLoader.load('./config/config.yml');

const app = new Application(opts);

app.run();
