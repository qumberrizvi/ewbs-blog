import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

export default function Page() {
    return (
        <Container className="py-5">
            <Row>
                <Col sm={7} className=" px-5">
                    <h2>The Coldest Sunset</h2>
                    <hr/>
                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="/images/1.jpg" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                                nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                                  <span
                                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </Col>

                <Col sm={5}>
                    <h2>Recents</h2>
                    <hr/>
                    <Col className="py-2">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div
                                className="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
                                <a href="/post">
                                    <img
                                        className="w-full lg:w-64 h-full object-cover rounded-t lg:rounded-t-none lg:rounded-l"
                                        src="/images/1.jpg" alt="Woman holding a mug"/>
                                </a>
                            </div>
                            <div
                                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div>
                                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better
                                        developer?
                                    </div>
                                    <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                        exercitationem praesentium nihil.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="py-2">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div
                                className="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
                                <a href="/post">
                                    <img
                                        className="w-full lg:w-64 h-full object-cover rounded-t lg:rounded-t-none lg:rounded-l"
                                        src="/images/1.jpg" alt="Woman holding a mug"/>
                                </a>
                            </div>
                            <div
                                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div>
                                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better
                                        developer?
                                    </div>
                                    <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                        exercitationem praesentium nihil.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="py-2">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div
                                className="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
                                <a href="/post">
                                    <img
                                        className="w-full lg:w-64 h-full object-cover rounded-t lg:rounded-t-none lg:rounded-l"
                                        src="/images/2.jpg" alt="Woman holding a mug"/>
                                </a>
                            </div>
                            <div
                                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div>
                                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better
                                        developer?
                                    </div>
                                    <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                        exercitationem praesentium nihil.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Col>
            </Row>
        </Container>
    );
}
