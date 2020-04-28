import {ITree} from '../models';

export const treeData: ITree[] = [
  {
    label: 'Map 1',
    value: [
      {
        label: 'Sub map 1.1',
        value: [
          {
            label: 'Sub sub map 1.1',
            value: [
              {
                lat: 55.151214,
                lng: 37.118463
              },
              {
                lat: 55.751234,
                lng: 37.618413
              }
            ]
          },
          {
            label: 'Sub sub map 1.2',
            value: [
              {
                lat: 56.741244,
                lng: 37.918423
              },
              {
                lat: 55.751244,
                lng: 38.118423
              }
            ]
          }
        ]
      },
      {
        label: 'Sub map 1.2',
        value: [
          {
            label: 'Sub sub map',
            value: [
              {
                lat: 55.251244,
                lng: 37.018423
              },
              {
                lat: 56.111244,
                lng: 37.008423
              }
            ]
          }
        ]
      }
    ]
  }
];
