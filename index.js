/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TipCalculator from './TipCalculator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TipCalculator);
