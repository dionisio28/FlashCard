import Realm from 'realm';
import {schemas} from './schemas';

const realmConfig = new Realm({schema: schemas});

export default realmConfig;
