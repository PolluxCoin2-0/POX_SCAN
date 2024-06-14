
const cardForTrendingSearch = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-row space-x-4">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p>Total Accounts</p>
                    <p>34433434</p>
                </div>
            </div>

            <div>
                <p>24h</p>
                <p>0</p>
            </div>
        </div>
    )
}

const TrendingSearch = () => {
    return (
        <div className="flex justify-between">
            {/* Left Side Trending Search */}
            <div>
                <div className="flex justify-between space-x-4">
                    <div className="flex">
                        <p className="font-semibold text-xl">Trending Search :</p>
                        <div className="flex space-x-2">
                            <img src="" alt="" />
                            <p>POX</p>
                        </div>
                        <div className="flex space-x-2">
                            <img src="" alt="" />
                            <p>USDX</p>
                        </div>
                    </div>
                    <p className="bg-light-red px-2 py-1">last 24 hours ago</p>
                </div>

                <div className="shadow-lg px-2 flex flex-row">
                    <div>
                        <cardForTrendingSearch />
                        <cardForTrendingSearch />
                    </div>

                    <div>
                        <cardForTrendingSearch />
                        <cardForTrendingSearch />
                    </div>
                </div>

                <div className="flex justify-between px-2 py-1 shadow-lg">
                    <div>
                        <p>Current/MaxTPS:</p>
                        <p>0/1000</p>
                    </div>

                    <div>
                        <p>Nodes:</p>
                        <p>00</p>
                    </div>

                    <div>
                        <p>Total Tokens:</p>
                        <p>00</p>
                    </div>

                    <div>
                        <p>Total Contracts:</p>
                        <p>00</p>
                    </div>

                    <div>
                        <p>Bandwidth:</p>
                        <p>2925033</p>
                    </div>

                    <div>
                        <p>Energy:</p>
                        <p>4245642</p>
                    </div>
                </div>
            </div>

            {/* Right Side Chart */}
            <div>
                <div>
                    <p>POX</p>
                    <p>DropDown</p>
                </div>

                <div className="shadow-lg">
                    <div className="flex space-x-4">
                        <img src="" alt="" />
                        <p>POX $0.755</p>
                    </div>

                    {/* Charts Library */}

                    <div>
                        <div>
                            <p>Market Cap: $000</p>
                            <p>Volume(24h): 24234234</p>
                        </div>
                        <div>
                            <p>Supply: 0 POX</p>
                            <p>Staked: 7,210,345</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingSearch