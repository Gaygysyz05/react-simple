import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Iphone X',
          img: 'iphonex.jpg',
          desc: '4/64 GB, 3000 mah, 5.8 inc',
          category: 'phones',
          price: '2599'
        },
        {
          id: 2,
          title: 'Samsung S10',
          img: 'samsung10.jpg',
          desc: '6/128 GB, 4000 mah, 6.1 inch',
          category: 'phones',
          price: '2499'
        },
        {
          id: 3,
          title: 'Samsung watch 6',
          img: 'watch.jpg',
          desc: '2/12 GB, 299 mah',
          category: 'watches',
          price: '4499'
        },
        {
          id: 4,
          title: 'Mi band 8',
          img: 'miband.jpg',
          desc: 'fitness wathes',
          category: 'fitness-watches',
          price: '1000'
        },
        {
          id: 5,
          title: 'JBL Tune 720BT',
          img: 'jbltune.png',
          desc: 'The best earphones',
          category: 'earbuds',
          price: '1000'
        },
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App
