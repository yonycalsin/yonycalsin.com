import React, { Component } from 'react';

const defaultState = {
   showed: false,
   show: () => {},
   hide: () => {},
};
const PopupContext = React.createContext(defaultState);

class PopupProvider extends Component {
   state = {
      showed: false,
   };
   componentWillMount() {
      const lsClosed = JSON.parse(localStorage.getItem('popup')) === false;
      if (lsClosed) {
         this.setState({
            showed: false,
         });
         return;
      }

      const interval = setTimeout(() => {
         this.setState({
            showed: true,
         });
         clearTimeout(interval);
      }, 2000);
   }
   componentDidUpdate(prev) {
      const { showed } = this.state;
      if (prev.showed !== showed) {
         localStorage.setItem('popup', JSON.stringify(showed));
      }
   }
   show = () => {
      this.setState({
         showed: true,
      });
   };
   hide = () => {
      this.setState({
         showed: false,
      });
   };
   clear = () => {
      localStorage.removeItem('popup');
      this.setState({
         showed: true,
      });
   };
   render() {
      const { children } = this.props;
      const { showed } = this.state;
      return (
         <PopupContext.Provider
            value={{
               showed,
               hide: this.hide,
               show: this.show,
            }}
         >
            {children}
         </PopupContext.Provider>
      );
   }
}

export default PopupContext;

export { PopupProvider };
