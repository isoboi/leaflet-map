export interface ITree {
  label: string;
  selected?: boolean;
  value: ITree[] | ILatLng[];
}

export interface ILatLng {
  lat: number;
  lng: number;
  selected?: boolean;
}
