import React from 'react';

class Header extends React.Component {
  render() {
    const index = this.props.index;
    const tabContent = this.props.content;
    const fullTab = tabContent.map((tab, index) => {
      let title = tab[index].title;
      return (
        <li> { title} </li>
      );
    });

    return(
      <div className='tabs-section'>
        { fullTab }
      </div>
    );
  }
};


export class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index : 0
    };
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab(num) {
    this.setState({ index : num });
  }
  render () {
    const tab = this.props.tabs[this.state.index];
    return (
      <div>
      <Header
        chosenTab={ this.changeTab }
        content={ this.props.tabs }
        index={ this.state.index }>
      </Header>
        <section>
          <article>
            { tab.content }
          </article>
        </section>
      </div>
      );
  }
};
