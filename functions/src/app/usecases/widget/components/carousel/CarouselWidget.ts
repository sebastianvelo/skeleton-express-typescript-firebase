import Widget from "../../../../common/widget/Widget";

export interface CarouselProps {
  id?: string;
}

const CarouselWidget = (props?: CarouselProps) =>
  Widget.builder<CarouselProps>("carousel").setData(props);

export default CarouselWidget;
