const { compoundExports } = require('../helper/compound')

const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
const bETH = "0xe970c37243F3d0B2AeB041b855Ef6466CB140BcA"
const unitroller = "0x4F96AB61520a6636331a48A11eaFBA8FB51f74e4"

const { tvl, borrowed } = compoundExports(
    unitroller, "ethereum", bETH, WETH, );

module.exports = {
    timetravel: true,
    doublecounted: false,
    methodology: "Same as Compound Finance, we just count all the tokens supplied (not borrowed money) on the lending markets",
    ethereum: { tvl, borrowed }
}