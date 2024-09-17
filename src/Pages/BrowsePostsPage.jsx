import {PostCard} from "../Components/PostCard"; // Component for each post
import { FilterComponent } from "../Components/FilterComponent";
import Footer from "../Components/Footer";
import { useLoaderData, useOutletContext, useNavigate } from "react-router-dom"
import { useState } from 'react';

export default function BrowsePostsPage() {
    const { posts } = useLoaderData();
    const { categories, favorites, setFavorites, authUser } = useOutletContext();
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div>
            <FilterComponent filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-20">
                {posts.map(post => (
                    <PostCard 
                        key={post.postId}
                        post={post} 
                        categories={categories} 
                        favorites={favorites}
                        authUser={authUser}
                        setFavorites={setFavorites} 
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
