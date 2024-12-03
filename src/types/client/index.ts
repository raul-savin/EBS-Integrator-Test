//  !##################!  //
//  * ----- Base ----- *  //
//  !##################!  //
type Event = React.KeyboardEvent | React.MouseEvent;

//  !####################!  //
//  * ----- Navbar ----- *  //
//  !####################!  //
export type TnavEvent = Event;
export type TnavMobile = { onToggle: (e: Event) => void; isOpen: boolean };

export type Titem = {
  id: number;
  quantity: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
