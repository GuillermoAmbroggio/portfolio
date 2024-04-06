import TenShop1 from '../../../assets/projects/tenshop/home.png';
import TenShop2 from '../../../assets/projects/tenshop/cart.png';
import TenShop3 from '../../../assets/projects/tenshop/crud.png';
import TenShop4 from '../../../assets/projects/tenshop/detailproduct.png';

import Vitau1 from '../../../assets/projects/vitau/vitau-icono.png';
import Vitau2 from '../../../assets/projects/vitau/vitau-home.png';
import Vitau3 from '../../../assets/projects/vitau/vitau-profile.png';
import Vitau4 from '../../../assets/projects/vitau/vitau-order.png';
import Vitau5 from '../../../assets/projects/vitau/vitau-orderdetail.png';
import Vitau6 from '../../../assets/projects/vitau/vitau-delivery.png';

import Gif1 from '../../../assets/projects/gif/gif-home.png';
import Gif2 from '../../../assets/projects/gif/gif-search.png';
import Gif3 from '../../../assets/projects/gif/gif-amount.png';

import Flybondi1 from '../../../assets/projects/flybondi/flybondi-home.png';
import Flybondi2 from '../../../assets/projects/flybondi/flybondi-trips.png';
import Flybondi3 from '../../../assets/projects/flybondi/flybondi-checkout.png';
import Flybondi4 from '../../../assets/projects/flybondi/flybondi-pdf.png';
import Flybondi5 from '../../../assets/projects/flybondi/flybondi-responsive.png';

import Weatherapp1 from '../../../assets/projects/weatherapp/weatherapp-light.png';
import Weatherapp2 from '../../../assets/projects/weatherapp/weatherapp-dark.png';

import Fixtuwin1 from '../../../assets/projects/fixtuwin/fixtu-home.png';
import Fixtuwin2 from '../../../assets/projects/fixtuwin/fixtu-payment.png';
import Fixtuwin3 from '../../../assets/projects/fixtuwin/fixtureDetail.png';
import Fixtuwin4 from '../../../assets/projects/fixtuwin/tableUser.png';

const TenShopImages = [TenShop1, TenShop2, TenShop3, TenShop4];
const VitauImages = [Vitau1, Vitau2, Vitau3, Vitau4, Vitau5, Vitau6];
const GifImages = [Gif1, Gif2, Gif3];
const FlybondiImages = [Flybondi1, Flybondi2, Flybondi3, Flybondi4, Flybondi5];
const Weatherapp = [Weatherapp1, Weatherapp2];
const FixtuwinImages = [Fixtuwin1, Fixtuwin2, Fixtuwin3, Fixtuwin4];

const useImages = (id: number): string[] => {
  let images: string[] = [];
  if (id === 0) {
    return (images = FixtuwinImages);
  }
  if (id === 1) {
    return (images = TenShopImages);
  }
  if (id === 2) {
    return (images = VitauImages);
  }
  if (id === 3) {
    return (images = GifImages);
  }
  if (id === 4) {
    return (images = FlybondiImages);
  }
  if (id === 5) {
    return (images = Weatherapp);
  }
  return images;
};

export default useImages;
