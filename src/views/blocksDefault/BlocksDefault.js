import React from 'react';
import BlockItemRender from "./BlockItemRender";
import {useReducer} from "react";
import {useLoaderData} from "react-router-dom";
import {getPosts} from "../../models/postModel";

const initialState = {
    posts: [], loading: false, error: null, page: 1
}

const Context = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'load_more_start':
            return {
                ...state,
                loading: true
            };
        case 'load_more_finish':
            let allPosts = [...state.posts, ...action.payload];

            return {
                ...state,
                page: state.page + 1,
                posts: allPosts
            };
        default:
            throw new Error('No matched action');

    }
}

export default function BlocksDefault() {
    const [state, dispatch] = useReducer(reducer, {
        ...initialState, posts: useLoaderData().posts || [],
    });
    console.log(state);

    const asyncLoadMore = () => {
        dispatch({type: "load_more_start"});
        getPosts(state.page + 1)().then(data => {
            dispatch({type: "load_more_finish", payload: data});
        });
    };

    return (<Context.Provider value={{ state, dispatch: asyncLoadMore }}>
        <section className="mx-auto max-w-screen-xl px-5 py-10 md:py-[70px] xl:px-0">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[36px] text-[#000000] font-medium capitalize my-0">Our Blog</h2>
                <div className="w-[70px] h-1 bg-[#dcb14a] mt-[15px] mb-[30px]"></div>
            </div>
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 grid-rows-1 justify-center justify-items-center gap-y-10 md:gap-x-6 md:gap-y-11 lg:grid-cols-2 xl:grid-cols-3">
                {state.posts?.map((item, i) => <BlockItemRender
                    key={item.id}
                    {...item}
                    i={i}
                />)}
            </div>
            <div onClick={asyncLoadMore} className="flex w-full items-center justify-center pt-[90px]">
                <button className="w-max text-[15px] text-[#ffffff] font-normal border-[1px] border-[#000000] bg-[#000000] px-[32px] py-1 my-0">Load more</button>
            </div>
        </section>
    </Context.Provider>)
}