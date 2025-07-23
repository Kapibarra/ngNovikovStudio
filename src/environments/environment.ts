// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { localEnvironment } from './environment.local';

export const environment = {
  firebase: {
    projectId: 'novikovstudio-4c512',
    appId: '1:20614670915:web:d73dd029597b6499bfc2f6',
    storageBucket: 'novikovstudio-4c512.appspot.com',
    apiKey: 'AIzaSyCXQVteVX7_HYErkRtdK84tS9b5olHxfok',
    authDomain: 'novikovstudio-4c512.firebaseapp.com',
    messagingSenderId: '20614670915',
  },
  production: false,
  telegram: localEnvironment.telegram,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
