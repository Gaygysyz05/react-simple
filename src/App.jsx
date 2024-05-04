import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Iphone X",
          img: "iphonex.jpg",
          desc: "4/64 GB, 3000 mah, 5.8 inc",
          category: "phones",
          price: "2599",
        },
        {
          id: 2,
          title: "Samsung S10",
          img: "samsung10.jpg",
          desc: "6/128 GB, 4000 mah, 6.1 inch",
          category: "phones",
          price: "2499",
        },
        {
          id: 3,
          title: "Samsung watch 6",
          img: "watch.jpg",
          desc: "2/12 GB, 299 mah",
          category: "watches",
          price: "4499",
        },
        {
          id: 4,
          title: "Mi band 8",
          img: "miband.jpg",
          desc: "fitness wathes",
          category: "fitness-watches",
          price: "1000",
        },
        {
          id: 5,
          title: "JBL Tune 720BT",
          img: "jbltune.png",
          desc: "The best earphones",
          category: "earbuds",
          price: "1000",
        },
      ],
      ShowFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.ShowFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ ShowFullItem: !this.state.ShowFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isIntArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isIntArray = true;
    });
    if (!isIntArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
