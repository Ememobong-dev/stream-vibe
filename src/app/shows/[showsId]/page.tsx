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
import usaDirector from "@/public/images/usa-director.png";
import usaMusic from "@/public/images/usa-music.png";
import { Button } from "@/src/components/button/Button";
import plusIcon from "@/public/icons/plus-white.svg";
import filledStar from "@/public/icons/filledStar.svg";
import halfStar from "@/public/icons/halfStar.svg";
import calenderIcon from "@/public/icons/calender-icon.svg";
import langIcon from "@/public/icons/language-icon.svg";
import ratingIcon from "@/public/icons/ratingStar.svg";
import genreIcon from "@/public/icons/genreIcon.svg";
import emptyStar from "@/public/icons/emptyStar.svg";
import downArrow from "@/public/icons/down-arrow-icon.svg";
import upArrow from "@/public/icons/up-arrow-icon.svg";
import episode1 from "@/public/images/shows--episode1.png";
import episode2 from "@/public/images/shows--episode2.png";
import episode3 from "@/public/images/shows--episode3.png";
import episode4 from "@/public/images/shows--episode4.png";
import episode5 from "@/public/images/shows--episode5.png";
import { Banner1 } from "@/src/components/banners/Banner1";
import { Tags } from "@/src/components/tags/Tags";
import { EpisodeArea } from "@/src/components/shows-episodes/EpisodeArea";
import { Footer } from "@/src/components/footer/Footer";

const ShowsSinglePage = () => {
  const { showsId } = useParams();

  return (
    <div>
      <Navbar />
      <Header
        headerImg="singleShowsHeader"
        headerTitle={showsId}
        headerDescription="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
      />
      <div className="px-14 mt-28">
        <Row gutter={[32, 32]}>
          <Col xs={14}>
            <div className="flex flex-col gap-5">
              <SinglePageCards>
                <h3 className="text-2xl mb-8">Seasons and Episodes</h3>
                <div className="flex flex-col gap-4">
                  {/* FIRST SEASON */}
                  <SinglePageCards variant="deepBlack" rounded>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <h3 className="text-2xl text-white">Season 01</h3>
                        <p className="text-grey-60 text-lg">9 Episodes</p>
                      </div>
                      <div className="rounded-full w-10 h-10 flex justify-center items-center p-2 border border-black-15 bg-black-08">
                        <Image src={downArrow} alt="arrow_icon" />
                      </div>
                    </div>
                  </SinglePageCards>

                  {/* SECOND SEASON */}
                  <SinglePageCards variant="deepBlack" rounded>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <h3 className="text-2xl text-white">Season 02</h3>
                        <p className="text-grey-60 text-lg">5 Episodes</p>
                      </div>
                      <div className="rounded-full w-10 h-10 flex justify-center items-center p-2 border border-black-15 bg-black-08">
                        <Image src={upArrow} alt="arrow_icon" />
                      </div>
                    </div>
                    <div>
                      <EpisodeArea
                        episodeNumber="01"
                        episodeNumberInWords="One"
                        episodeTitle="The Vanishing of Will Byers"
                        episodeDuration="49"
                        episodeDescription="On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab."
                        imgSrc={episode1}
                      />
                      <EpisodeArea
                        episodeNumber="02"
                        episodeNumberInWords="Two"
                        episodeTitle="The Weirdo on Maple Street"
                        episodeDuration="56"
                        episodeDescription="Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call."
                        imgSrc={episode2}
                      />
                      <EpisodeArea
                        episodeNumber="03"
                        episodeNumberInWords="Three"
                        episodeTitle="Holly, Jolly"
                        episodeDuration="52"
                        episodeDescription="An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her."
                        imgSrc={episode3}
                      />
                      <EpisodeArea
                        episodeNumber="04"
                        episodeNumberInWords="Four"
                        episodeTitle="The Body"
                        episodeDuration="51"
                        episodeDescription="Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.."
                        imgSrc={episode4}
                      />
                      <EpisodeArea
                        episodeNumber="05"
                        episodeNumberInWords="Five"
                        episodeTitle="The Flea and the Acrobat"
                        episodeDuration="53"
                        episodeDescription="Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension."
                        imgSrc={episode5}
                      />
                    </div>
                  </SinglePageCards>

                  {/* THIRD SEASON */}
                  <SinglePageCards variant="deepBlack" rounded>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <h3 className="text-2xl">Season 03</h3>
                        <p className="text-grey-60 text-lg">7 Episodes</p>
                      </div>
                      <div className="rounded-full w-10 h-10 flex justify-center items-center p-2 border border-black-15 bg-black-08">
                        <Image src={downArrow} alt="arrow_icon" />
                      </div>
                    </div>
                  </SinglePageCards>
                </div>
              </SinglePageCards>
              <SinglePageCards>
                <p className="text-grey-60">Description</p>
                <span>
                  <p>
                  When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
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
                  <span className="text-grey-60 text-xl">
                    Available Languages
                  </span>
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
                  <Tags text="Sci-Fi TV" />
                  <Tags text="Teen TV Shows" />
                  <Tags text="US TV Shows" />
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <span className="text-grey-60 text-xl">Director</span>
                <div className="flex gap-3 flex-wrap mt-3 bg-black-08 rounded-lg p-3 border border-black-15">
                  <span>
                    <Image
                      src={usaDirector}
                      className="w-16 h-16"
                      alt="director_img"
                    />
                  </span>
                  <div>
                    <p>The Duffer Brothers</p>
                    <p className="text-grey-60">From USA</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <span className="text-grey-60 text-xl">Music</span>
                <div className="flex gap-3 flex-wrap mt-3 bg-black-08 rounded-lg p-3 border border-black-15">
                  <span>
                    <Image
                      src={usaMusic}
                      className="w-16 h-16"
                      alt="director_img"
                    />
                  </span>
                  <div>
                    <p>Kyle Dixon</p>
                    <p className="text-grey-60">From USA</p>
                  </div>
                </div>
              </div>
            </SinglePageCards>
          </Col>
        </Row>
      </div>
      <Banner1 />
      <Footer />
    </div>
  );
};

export default ShowsSinglePage;
