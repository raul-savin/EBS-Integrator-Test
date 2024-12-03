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

export type Tsort = { value: "low" | "high" };

export type Tcategory = {
  category: Titem["category"];
  onClick: ({ category }: Pick<Tcategory, "category">) => void;
};

export type Tfilter = {
  data: Titem[];
  state: Tstate;
  setState: (state: Tstate) => void;
};

export type Tstate = {
  category: string[];
  sort: Tsort["value"] | null;
  items: Titem[];
};
