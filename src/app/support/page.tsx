import { Navbar } from "@/src/components/nav/Navbar";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import supportImg from "@/public/images/support-headerImg.png";
import { SinglePageCards } from "@/src/components/Cards/SinglePageCards";
import { Button } from "@/src/components/button/Button";

const Support = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-64 px-14">
        <div>
          <Row
            gutter={32}
           className="w-full min-h-full  max-h-full h-full"
          >
            <Col xs={8} className="w-full min-h-full  max-h-full h-full">
              <div>
                <h2 className="text-4xl text-white">
                  Welcome to our support page
                </h2>
                <span>
                  <p className="text-grey-60 my-3">
                    We're here to help you with any problems you may be having
                    with our product.
                  </p>
                </span>
                <span>
                  <Image
                    src={supportImg}
                    className="w-full object-cover"
                    alt="support_img"
                  />
                </span>
              </div>
            </Col>
            <Col xs={16} className=" w-full min-h-full  max-h-full h-ful">
              <div className="h-full w-full">
                <SinglePageCards variant="deepBlack" rounded>
                  <div className="h-full">
                    <Row gutter={[32, 32]} className="h-full">
                      <Col xs={12} className="h-full">
                        <div className="flex flex-col gap-3">
                          <label htmlFor="firstName" className="text-lg">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="border border-black-15 bg-black-08 rounded-lg focus:outline-0 focus:border-black-10 p-3"
                            placeholder="Enter First Name"
                          />
                        </div>
                      </Col>
                      <Col xs={12} className="h-full">
                        <div className="flex flex-col gap-3">
                          <label htmlFor="lastName" className="text-lg">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="border border-black-15 bg-black-08 rounded-lg focus:outline-0 focus:border-black-10 p-3"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </Col>
                      <Col xs={12} className="h-full">
                        <div className="flex flex-col gap-3">
                          <label htmlFor="email" className="text-lg">
                            Email
                          </label>
                          <input
                            type="text"
                            id="email"
                            className="border border-black-15 bg-black-08 rounded-lg focus:outline-0 focus:border-black-10 p-3"
                            placeholder="Enter your Email"
                          />
                        </div>
                      </Col>
                      <Col xs={12} className="h-full">
                        <div className="flex flex-col gap-3">
                          <label htmlFor="phone" className="text-lg">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="phone"
                            className="border border-black-15 bg-black-08 rounded-lg focus:outline-0 focus:border-black-10 p-3"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                      </Col>
                      <Col xs={24}>
                        <div className="flex flex-col gap-3">
                          <label htmlFor="message" className="text-lg">
                            Message
                          </label>
                          <textarea
                            rows={4}
                            id="message"
                            placeholder="Enter your Message"
                            className="border border-black-15 bg-black-08 rounded-lg focus:outline-0 focus:border-black-10 p-3"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="flex justify-between items-center mt-8">
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" />
                        <p>I agree with Terms of Use and Privacy Policy</p>
                      </span>

                      <Button variant="filled" text="Send Message" />
                    </div>
                  </div>
                </SinglePageCards>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Support;
