import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import {fetcher} from "@/api/fetcher";
import {endpoints} from "@/constants/endpoints";
import {Post} from "@/types/post";
import {Metadata} from "next";
import {Paginator} from "@/types/paginator";
import placeholder from '@/images/placeholder.png';

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const appUrl = process.env.APP_URL || 'https://ewbsbusiness.ae/blog/';
    const post: Post = await fetcher(`${endpoints.posts}${params.slug}`);
    return {
        metadataBase: new URL(appUrl),
        title: post.seo_title || post.title,
        description: post.meta_description || post.excerpt || post.body,
        category: post.category?.name,
        keywords: post.meta_keywords?.split(','),
        authors: (post.author) ? [{name: post.author.name}] : undefined,
        openGraph: {
            title: post.seo_title || post.title,
            description: post.meta_description || post.excerpt || post.body,
            url: `${appUrl}post/${post.slug}`,
            images: (post.image) ? [{url: post.image, alt: post.seo_title || post.title,}] : undefined,
        }
    }
}

export default async function Page({params}: { params: { slug: string } }) {
    const storageURI = process.env.STORAGE_URL;
    const post: Post = await fetcher(`${endpoints.posts}${params.slug}`);
    const recentPosts: Paginator<Post> = await fetcher(`${endpoints.posts}?limit=3`);

    return (
        <Container className="py-5">
            <Row>
                {(post) && (
                    <Col sm={7} md={8} className=" px-2">
                        <h2>{post.title}</h2>
                        <hr/>
                        <div className="rounded shadow-lg position-relative">
                            {
                                (post.image) && (
                                    <div className="position-relative w-full">
                                        <Image className="w-full position-relative" src={`${storageURI}${post.image}`}
                                               alt={post.title} fill={true}/>
                                    </div>
                                )
                            }
                            <div className="px-6 py-4" dangerouslySetInnerHTML={{__html: post.body}}></div>
                        </div>
                    </Col>

                )}

                {/*Recent Posts*/}
                <Col sm={5} md={4} className={' pt-5'}>
                    <h4>Recent Posts</h4>
                    <hr/>
                    {
                        (recentPosts?.data?.length) && (
                            recentPosts.data.map((post, index) => (
                                <Col key={`recent-post-${index}`} className="py-2">
                                    <div
                                        className="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div
                                            className="w-full h-full flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden position-relative">
                                            <Image
                                                className="w-full max-h-60 position-relative object-cover rounded-t lg:rounded-t-none lg:rounded-l"
                                                src={(post.image) ? `${storageURI}${post.image}` : placeholder}
                                                alt="Woman holding a mug"
                                                fill={true}
                                            />
                                        </div>
                                        <div
                                            className="pt-2">
                                            <div>
                                                <div className="text-gray-900 font-bold text-xl mb-2">{post.title}</div>
                                                <p className="text-gray-700 text-sm">
                                                    {(post.excerpt && post.excerpt !== '{}') ? post.excerpt : `Read in detail about ${post.title}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}
