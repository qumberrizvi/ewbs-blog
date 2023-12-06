import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import {endpoints} from "@/constants/endpoints";
import {fetcher} from "@/api/fetcher";
import {Post} from "@/types/post";
import {Paginator} from "@/types/paginator";
import Image from "next/image";
import Link from "next/link";
import placeholder from '@/images/placeholder.png';

const fetchPosts = async () => {
    const posts: Paginator<Post> = await fetcher(endpoints.posts);
    return posts;
}

export default async function Home() {
    const posts = await fetchPosts();
    const storageURI = process.env.STORAGE_URL;
    return (
        <main className="py-5">
            <Container>
                {/*<Row>
                    <h2>Featured</h2>
                    <hr/>
                    <Col sm={6} className="d-flex justify-content-center">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">

                            <div
                                className="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
                                <a href="/post">
                                    <Image
                                        className="w-full lg:w-64 h-full object-cover rounded-t lg:rounded-t-none lg:rounded-l"
                                        src={placeholder} alt="Woman holding a mug"/>
                                </a>
                            </div>
                            <div
                                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better
                                        developer?
                                    </div>
                                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                        exercitationem praesentium nihil.</p>
                                </div>
                                <div className="flex items-center">
                                    <Image className="w-10 h-10 rounded-full mr-4" src={placeholder}
                                         alt="Avatar of Jonathan Reinink"/>
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                        <p className="text-gray-600">Aug 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col sm={6} className="d-flex justify-content-center">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div
                                className="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
                                <a href="/post">
                                    <Image
                                        className="w-full lg:w-64 h-full object-cover rounded-t lg:rounded-t-none lg:rounded-l"
                                        src={placeholder} alt="Woman holding a mug"/>
                                </a>
                            </div>
                            <div
                                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better
                                        developer?
                                    </div>
                                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                        exercitationem praesentium nihil.</p>
                                </div>
                                <div className="flex items-center">
                                    <Image className="w-10 h-10 rounded-full mr-4" src={placeholder}
                                         alt="Avatar of Jonathan Reinink"/>
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                        <p className="text-gray-600">Aug 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>*/}
                <Row className="py-10">
                    <h2>All Stories</h2>
                    <hr/>
                    {
                        (posts && posts.data.length) && (
                            posts.data.map((post) => (
                                <Col key={`post-${post.id}`} sm={4} className="d-flex justify-content-center pb-5">
                                    <div className="rounded overflow-hidden shadow-lg">
                                        <Link href={`/post/${post.slug}`}>
                                            <div className={'max-h-[275px]'}>
                                                <Image
                                                    className="w-full max-h-[275px] min-h-[275px] min-w-[415px] max-w-[415px]"
                                                    src={(post.image) ? `${storageURI}${post.image}` : placeholder}
                                                    alt={post.title} width={415} height={275}/>
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">{post.title}</div>
                                                <p className="text-gray-700 text-base">
                                                    {(post.excerpt && post.excerpt !== '{}') ? post.excerpt : `Read in detail about ${post.title}`}
                                                </p>
                                            </div>
                                        </Link>
                                        {/*<div className="px-6 pt-4 pb-2">
                                          <span
                                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                              #photography
                                          </span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                #travel
                                            </span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                #winter
                                            </span>
                                        </div>*/}
                                    </div>
                                </Col>
                            ))
                        )
                    }

                </Row>
            </Container>

        </main>
    )
}
