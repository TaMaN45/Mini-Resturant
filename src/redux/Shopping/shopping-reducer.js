import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Pizza",
      description:
        "a dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings and baked",
      price: 5.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-eJmvQnM5YyC8UwvvIr56hMyQr0Wa6vppA&usqp=CAU",
    },
    {
      id: 2,
      title: "Lasagne",
      description:
        "Lasagna is a wide, flat sheet of pasta. Lasagna can refer to either the type of noodle or to the typical lasagna dish which is a dish made with several layers of lasagna sheets with sauce and other ingredients, such as meats and cheese, in between the lasagna noodles.",
      price: 7.0,
      image:
        "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2013/04/Italian-three-cheese-lasagne.jpg",
    },
    {
      id: 3,
      title: "Pasta",
      description:
        "a dish originally from Italy consisting of dough made from durum wheat and water, extruded or stamped into various shapes and typically cooked in boiling water",
      price: 3.0,
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      title: "frico",
      description:
        "This is a typical dish from Friuli, cheese cooked with potatoes,t was made with the remains of the cheese-making process",
      price: 10.0,
      image: "https://www.eataly.com/wp/wp-content/uploads/2016/05/FRICO.jpg",
    },
    {
      id: 5,
      title: " Fiorentina",
      description:
        "The bistecca alla fiorentina is an Italian steak made of young steer or heifer,that, combined with the specific preparation, makes it one of the most popular dishes of Tuscan cuisine.  ",
      price: 20.0,
      image:
        "https://www.chefspencil.com/wp-content/uploads/Fiorentina.jpg.webp",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
