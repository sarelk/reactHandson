import React, { Component } from 'react';

import bitcoinService from '../services/BitcoinService'
import userService from '../services/UserService'

import coinsImg from '../assets/icons/coins.png'
import bitcoinImg from '../assets/icons/bitcoin.png'

class HomePage extends Component {
  
  state = {
    user: userService.getUser(),
    bitcoinRate: 0
  }

  async componentDidMount() {
    const userDetails = await userService.getUser()
    this.setState({userDetails})
    const bitcoinRate = await bitcoinService.getBitcoinRate(this.state.user.coins)
    this.setState({bitcoinRate})
  }

  render() {
    const user = this.state.user
    
    return (
      <div className="home-page">
          <div className="user-details">
            <div className="user-name">Hello {user[0].name}!</div>
            <div className="user-coins-count">
              <img src={coinsImg} alt="coins" width="24px" height="24px" /> Coins: {this.state.user[0].coins} 
            </div>
            <div className="user-coins-rate">
            <img src={bitcoinImg} alt="bitcoin" width="24px" height="24px" /> BTC: {this.state.bitcoinRate}
            </div>
          </div>
      </div>
    );
  }
}

export default HomePage;
