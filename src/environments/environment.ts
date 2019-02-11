// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // api Methods
  registerUrl:            'http://192.168.11.133:9111/api/2.0/Account',
  LoginUrl:               'http://192.168.11.133:9111/api/2.0', // For login and refresh token
  MastersUrl:             'http://192.168.11.133:6075/api/2.0',
  ProviderUrl:            'http://192.168.11.133:9114/api/2.0',
  PatientUrl:             'http://192.168.11.133:9115/api/2.0',
  FacilityUrl:            'http://192.168.11.133:9124/api/2.0',
  PharmacyUrl:            'http://192.168.11.133:9117/api/2.0',
  ManufactureUrl:         'http://192.168.11.133:9116/api/2.0',
  LabUrl:                 'http://192.168.11.133:9118/api/2.0',
  BloodbankUrl:           'http://192.168.11.133:9119/api/2.0',
  DistributionCenterUrl:  'http://192.168.11.133:9120/api/2.0',
  HospitalUrl :           'http://192.168.11.133:9121/api/2.0',
  ClinicUrl:              'http://192.168.11.133:9122/api/2.0',
  radiologyUrl:           'http://192.168.11.133:9123/api/2.0',
  countsUrl:              'http://192.168.11.133:9113/api/2.0',
  menuUrl:                'http://192.168.11.131:51113/api/2.0',
  encounterUrl:           'http://192.168.11.133:9127/api/2.0',
  appointmentUrl:         'http://192.168.11.133:9126/api/2.0',
  adminUrl:               'http://192.168.11.133:7000/api/2.0',
  adminstaffUrl:          'http://192.168.11.133:9113/api/2.0',
  prescriptionUrl:        'http://192.168.11.133:9128/api/2.0',
  drugUrl:                'http://192.168.11.147:9000/api/2.0',
  medicationDrugUrl:      'http://192.168.11.133:9125/api/2.0',


  PharmacyMastersUrl:     'http://192.168.11.139:5001/api/2.0',
  DistributionCenterMastersUrl:     'http://192.168.11.139:5001/api/2.0',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
