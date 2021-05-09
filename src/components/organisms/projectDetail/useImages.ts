import TenShop1 from "../../../assets/projects/tenshop/home.png";
import TenShop2 from "../../../assets/projects/tenshop/cart.png";
import TenShop3 from "../../../assets/projects/tenshop/crud.png";
import TenShop4 from "../../../assets/projects/tenshop/detailproduct.png";

import Vitau1 from "../../../assets/projects/vitau/vitau-icono.png";
import Vitau2 from "../../../assets/projects/vitau/vitau-home.png";
import Vitau3 from "../../../assets/projects/vitau/vitau-profile.png";
import Vitau4 from "../../../assets/projects/vitau/vitau-order.png";
import Vitau5 from "../../../assets/projects/vitau/vitau-orderdetail.png";
import Vitau6 from "../../../assets/projects/vitau/vitau-delivery.png";

import Gif1 from "../../../assets/projects/gif/gif-home.png";
import Gif2 from "../../../assets/projects/gif/gif-search.png";
import Gif3 from "../../../assets/projects/gif/gif-amount.png";

const TenShopImages = [TenShop1, TenShop2, TenShop3, TenShop4];
const VitauImages = [Vitau1, Vitau2, Vitau3, Vitau4, Vitau5, Vitau6];
const GifImages = [Gif1, Gif2, Gif3];

const useImages = (id: number): string[] => {
  let images: string[] = [];
  if (id === 1) {
    images = TenShopImages;
  }
  if (id === 2) {
    images = VitauImages;
  }
  if (id === 3) {
    images = GifImages;
  }

  return images;
};

export default useImages;
