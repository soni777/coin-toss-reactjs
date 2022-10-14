import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, tossResult: 0}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => {
      let {heads, tails} = prevState
      if (tossResult) {
        tails += 1
      } else {
        heads += 1
      }
      return {tossResult, heads, tails}
    })
  }

  render() {
    const {heads, tails, tossResult} = this.state
    const total = heads + tails
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="title">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>

          {tossResult ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          )}

          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score">Total:{total}</p>
            <p className="score">Heads:{heads}</p>
            <p className="score">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

// ccbp solution:
// const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

// const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

// class CoinToss extends Component {
//   state = {
//     tossResultImage: HEADS_IMG_URL,
//     headsCount: 0,
//     tailsCount: 0,
//   }

//   onTossCoin = () => {
//     const {headsCount, tailsCount} = this.state
//     const toss = Math.floor(Math.random() * 2)
//     let tossImage = ''
//     let latestHeadsCount = headsCount
//     let latestTailsCount = tailsCount

//     if (toss === 0) {
//       tossImage = HEADS_IMG_URL
//       latestHeadsCount += 1
//     } else {
//       tossImage = TAILS_IMG_URL
//       latestTailsCount += 1
//     }
//     this.setState({
//       tossResultImage: tossImage,
//       headsCount: latestHeadsCount,
//       tailsCount: latestTailsCount,
//     })
//   }

//   render() {
//     const {tossResultImage, headsCount, tailsCount} = this.state
//     const totalCount = headsCount + tailsCount

//     return (
//       <div className="app-container">
//         <div className="coin-toss-container">
//           <h1 className="heading">Coin Toss Game</h1>
//           <p className="description">Heads (or) Tails</p>
//           <img
//             src={tossResultImage}
//             alt="toss result"
//             className="toss-result-img"
//           />
//           <button type="button" className="button" onClick={this.onTossCoin}>
//             Toss Coin
//           </button>
//           <div className="counts-container">
//             <p className="count">Total: {totalCount}</p>
//             <p className="count">Heads: {headsCount}</p>
//             <p className="count">Tails: {tailsCount}</p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
