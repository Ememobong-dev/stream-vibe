"use client";

import { SinglePageCards } from "@/src/components/Cards/SinglePageCards";
import { Header } from "@/src/components/headerWrapper/Header";
import { Navbar } from "@/src/components/nav/Navbar";
import { Col, Row } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import leftArrow from "@/public/icons/rounded-left-arrow.svg";
import rightArrow from "@/public/icons/rounded-right-arrow.svg";
import image001 from "@/public/images/SP-Image.png";
import image1 from "@/public/images/SP-Image-1.png";
import image2 from "@/public/images/SP-Image-2.png";
import image3 from "@/public/images/SP-Image-3.png";
import image4 from "@/public/images/SP-Image-4.png";
import image5 from "@/public/images/SP-Image-5.png";
import image6 from "@/public/images/SP-Image-6.png";
import image7 from "@/public/images/SP-Image-7.png";
import { Button } from "@/src/components/button/Button";
import plusIcon from "@/public/icons/plus-white.svg";
import filledStar from "@/public/icons/filledStar.svg";
import halfStar from "@/public/icons/halfStar.svg";
import calenderIcon from "@/public/icons/calender-icon.svg";
import langIcon from "@/public/icons/language-icon.svg";
import ratingIcon from "@/public/icons/ratingStar.svg";
import genreIcon from "@/public/icons/genreIcon.svg";
import emptyStar from "@/public/icons/emptyStar.svg";
import { CarouselButtons } from "@/src/components/button/CarouselButtons";
import { Banner1 } from "@/src/components/banners/Banner1";
import { Tags } from "@/src/components/tags/Tags";

const MoviesSinglePage = () => {
  const { moviesId } = useParams();

  return (
    <div>
      <Navbar />
      <Header
        headerImg="singleMoviesHeader"
        headerTitle={moviesId ?? "Kantara"}
        headerDescription="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
      />
      <div className="px-14 mt-28">
        <Row gutter={[32, 32]}>
          <Col xs={14}>
            <div className="flex flex-col gap-5">
              <SinglePageCards>
                <p className="text-grey-60">Description</p>
                <span>
                  <p>
                    A fiery young man clashes with an unflinching forest officer
                    in a south Indian village where spirituality, fate and
                    folklore rule the lands.
                  </p>
                </span>
              </SinglePageCards>
              <SinglePageCards>
                <div className="flex justify-between items-center">
                  <p className="text-grey-60">Cast</p>
                  <div className="flex gap-3 items-center">
                    <span>
                      <Image
                        src={leftArrow}
                        className="w-8 h-8"
                        alt="arrow_icons"
                      />
                    </span>
                    <span>
                      <Image
                        src={rightArrow}
                        className="w-8 h-8"
                        alt="arrow_icons"
                      />
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-8 gap-3 mt-5">
                  <Image src={image001} alt="" />
                  <Image src={image1} alt="" />
                  <Image src={image2} alt="" />
                  <Image src={image3} alt="" />
                  <Image src={image4} alt="" />
                  <Image src={image5} alt="" />
                  <Image src={image6} alt="" />
                  <Image src={image7} alt="" />
                </div>
              </SinglePageCards>
              <SinglePageCards>
                <div className="flex justify-between items-center">
                  <p className="text-grey-60">Reviews</p>
                  <Button
                    variant="bordered"
                    text="Add Your Review"
                    size="sm"
                    icon={plusIcon}
                  />
                </div>
                <div className="flex gap-3 mt-8">
                  <SinglePageCards variant="tags">
                    <div className="flex justify-between items-center mb-10">
                      <div>
                        <h4>Aniket Roy</h4>
                        <p>From India</p>
                      </div>
                      <div className="flex gap-2 items-center justify-center py-2 px-3 rounded-full border border-black-15 text-grey-60">
                        <span>
                          <Image
                            src={filledStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <Image
                            src={filledStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <Image
                            src={filledStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <Image
                            src={filledStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <Image
                            src={halfStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <p>4.5</p>
                        </span>
                      </div>
                    </div>
                    <div>
                      <p>
                        This movie was recommended to me by a very dear friend
                        who went for the movie by herself. I went to the cinemas
                        to watch but had a houseful board so couldn’t watch it.
                      </p>
                    </div>
                  </SinglePageCards>
                  <SinglePageCards variant="tags">
                    <div className="flex justify-between items-center mb-10">
                      <div>
                        <h4>Aniket Roy</h4>
                        <p>From India</p>
                      </div>
                      <div className="flex gap-2 items-center justify-center py-2 px-3 rounded-full border border-black-15 text-grey-60">
                        <span>
                          <Image
                            src={filledStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <Image
                            src={filledStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <Image
                            src={filledStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <Image
                            src={filledStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <Image
                            src={halfStar}
                            className="w-3 h-3"
                            alt="star"
                          />
                        </span>
                        <span>
                          <p>4.5</p>
                        </span>
                      </div>
                    </div>
                    <div>
                      <p>
                        This movie was recommended to me by a very dear friend
                        who went for the movie by herself. I went to the cinemas
                        to watch but had a houseful board so couldn’t watch it.
                      </p>
                    </div>
                  </SinglePageCards>
                </div>
                <div className="flex justify-center items-center mt-3">
                  <CarouselButtons />
                </div>
              </SinglePageCards>
            </div>
          </Col>
          <Col xs={10}>
            <SinglePageCards>
              <div className="flex flex-col mb-5">
                <div className="flex gap-1 items-center">
                  <span>
                    <Image
                      src={calenderIcon}
                      className="w-6 h-6"
                      alt="calender_icon"
                    />
                  </span>
                  <span className="text-grey-60 text-xl">Released Year</span>
                </div>
                <p className="text-white text-xl">2022</p>
              </div>

              <div className="flex flex-col mb-5">
                <div className="flex gap-1 items-center">
                  <span>
                    <Image src={langIcon} className="w-6 h-6" alt="langIcon" />
                  </span>
                  <span className="text-grey-60 text-xl">Available Languages</span>
                </div>
                <div className="flex gap-3 flex-wrap mt-3">
                  <Tags text="English" />
                  <Tags text="Hindi" />
                  <Tags text="Tamil" />
                  <Tags text="Telegu" />
                  <Tags text="Kannada" />
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <div className="flex gap-1 items-center mb-3">
                  <span>
                    <Image
                      src={ratingIcon}
                      className="w-6 h-6"
                      alt="ratingIcon"
                    />
                  </span>
                  <span className="text-grey-60 text-xl">Ratings</span>
                </div>

                <div className="flex gap-5">
                  <SinglePageCards variant="tags">
                    <h2 className="text-lg max-[1400px]:text-xl">IMDb</h2>
                    <div className="flex gap-2 items-center justify-center mt-1 text-grey-60">
                      <span>
                        <Image
                          src={filledStar}
                          className="w-4 h-4"
                          alt="star"
                        />
                      </span>
                      <span>
                        <Image
                          src={filledStar}
                          className="w-4 h-4"
                          alt="star"
                        />
                      </span>
                      <span>
                        <Image
                          src={filledStar}
                          className="w-4 h-4"
                          alt="star"
                        />
                      </span>
                      <span>
                        <Image
                          src={filledStar}
                          className="w-4 h-4"
                          alt="star"
                        />
                      </span>
                      <span>
                        <Image src={halfStar} className="w-4 h-4" alt="star" />
                      </span>
                      <span>
                        <p className="text-lg">4.5</p>
                      </span>
                    </div>
                  </SinglePageCards>
                  <SinglePageCards variant="tags">
                    <h2 className="text-lg max-[1400px]:text-xl">Streamvibe</h2>
                    <div className="flex gap-2 items-center justify-center mt-1 text-grey-60">
                      <span>
                        <Image
                          src={filledStar}
                          className="w-4 h-4"
                          alt="star"
                        />
                      </span>
                      <span>
                        <Image
                          src={filledStar}
                          className="w-4 h-4"
                          alt="star"
                        />
                      </span>
                      <span>
                        <Image
                          src={filledStar}
                          className="w-4 h-4"
                          alt="star"
                        />
                      </span>
                      <span>
                        <Image
                          src={filledStar}
                          className="w-4 h-4"
                          alt="star"
                        />
                      </span>
                      <span>
                        <Image src={emptyStar} className="w-4 h-4" alt="star" />
                      </span>
                      <span>
                        <p className="text-lg">4</p>
                      </span>
                    </div>
                  </SinglePageCards>
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <div className="flex gap-1 items-center">
                  <span>
                    <Image
                      src={genreIcon}
                      className="w-6 h-6"
                      alt="genreIcon"
                    />
                  </span>
                  <span className="text-grey-60 text-xl">Genres</span>
                </div>
                <div className="flex gap-3 flex-wrap mt-3">
                  <Tags text="Action" />
                  <Tags text="Adventure" />
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <span className="text-grey-60 text-xl">Director</span>
                <div className="flex gap-3 flex-wrap mt-3 bg-black-08 rounded-lg p-3 border border-black-15">
                  <span>
                    <Image src={image001} className="w-16 h-16" alt="director_img" />
                  </span>
                  <div>
                    <p>Rishab Shetty</p>
                    <p className="text-grey-60">From India</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <span className="text-grey-60 text-xl">Music</span>
                <div className="flex gap-3 flex-wrap mt-3 bg-black-08 rounded-lg p-3 border border-black-15">
                  <span>
                    <Image src={image5} className="w-16 h-16" alt="director_img" />
                  </span>
                  <div>
                    <p>B. Ajaneesh Loknath</p>
                    <p className="text-grey-60">From India</p>
                  </div>
                </div>
              </div>

            </SinglePageCards>
          </Col>
        </Row>
      </div>
      <Banner1 />
    </div>
  );
};

export default MoviesSinglePage;
