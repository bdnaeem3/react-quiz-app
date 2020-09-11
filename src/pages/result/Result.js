import React from 'react';

const Home = () => {

    const results = JSON.parse(localStorage.getItem("results"));

    return (
        <div>
            <ol>
                {
                    results &&
                    [...results].map((item, i)=>{
                        return (
                            <li key={i} className="text-left mt-5">
                                <p>{item.name} has scored {item.score}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Home;