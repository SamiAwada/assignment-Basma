import React from "react";
import c from "./home.module.css";
import NavBar from "../../components/Navbar/NavBar";

export default function Home() {
  return (
    <div className={c.HomeContainer}>
      <div className={c.purpleBox}></div>
      <NavBar />

      <div className={c.containerSections}>
        <section className={c.section}>
          <div className="d-flex justify-content-between">
            <div
              className={
                "d-flex flex-column  justify-content-center " + c.sectContent1
              }
            >
              <h1>Creative way to Showcase your App</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                posuere semper mauris, ac vulputate urna accumsan vitae.
                Curabitur egestas pulvinar iaculis.
              </p>
              <button className={c.GetStartedButton} onClick={() => {}}>
                Get Started
              </button>
            </div>

            <div className="thumb-1">
              <img
                src={"/assets/images/png/thumb-1.png"}
                alt="thumb-1"
                width={"auto"}
                height={"600px"}
              />
            </div>
          </div>
        </section>

        <section className={c.section}>
          <div className={"d-flex flex-column " + c.sectContent2}>
            <div
              className={
                "d-flex flex-column align-items-center " + c.sectHeader2
              }
            >
              <h1>Code Challenge</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                euismod quam dolor. Vestibulum non lobortis nisl.
              </p>
            </div>

            <div
              className={
                "d-flex justify-content-center flex-wrap " + c.sectBody2
              }
            >
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/pointer-top.svg"}
                  alt="pointer"
                  height={"30px"}
                  width={"50px"}
                />
                <h2>Fully Funtional</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/cart-full.svg"}
                  alt="pointer"
                  height={"30px"}
                  width={"50px"}
                />
                <h2>Fully Funtional</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/money-location.svg"}
                  alt="pointer"
                  height={"30px"}
                  width={"50px"}
                />
                <h2>Fully Funtional</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/delivery.svg"}
                  alt="pointer"
                  height={"30px"}
                  width={"50px"}
                />
                <h2>Location Tracking</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/investment.svg"}
                  alt="pointer"
                  height={"30px"}
                  width={"50px"}
                />
                <h2>Powerful Setting</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/world.svg"}
                  alt="pointer"
                  height={"30px"}
                  width={"50px"}
                />
                <h2>Multiple</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={c.section}>
          <div className={"d-flex justify-content-around"}>
            <div>
              <img
                src={"/assets/images/png/thumb-3.png"}
                alt="thumb-2(1)"
                height={"auto"}
              />
            </div>

            <div className={"d-flex flex-column " + c.sectBody3}>
              <h1>Work faster with powerfull tools</h1>
              <div className="d-flex align-items-center">
                <img
                  src={"/assets/images/svg/check.svg"}
                  height={"15px"}
                  width={"15px"}
                  alt={"checkmark"}
                />
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam euismod quam
                  dolor.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={"/assets/images/svg/check.svg"}
                  height={"15px"}
                  width={"15px"}
                  alt={"checkmark"}
                />
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam euismod quam
                  dolor.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={"/assets/images/svg/check.svg"}
                  height={"15px"}
                  width={"15px"}
                  alt={"checkmark"}
                />
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam euismod quam
                  dolor.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={"/assets/images/svg/check.svg"}
                  height={"15px"}
                  width={"15px"}
                  alt={"checkmark"}
                />
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam euismod quam
                  dolor.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={"/assets/images/svg/check.svg"}
                  height={"15px"}
                  width={"15px"}
                  alt={"checkmark"}
                />
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Nam euismod quam
                  dolor.
                </p>
              </div>
              <div className="d-flex" style={{ marginTop: "7px" }}>
                <div className={c.LinksBox}>
                  <button className="">
                    <img
                      src={"/assets/images/svg/twitter-original.svg"}
                      alt="twitter"
                      width={"25px"}
                    />
                  </button>
                </div>
                <div className={c.LinksBox}>
                  <button className="">
                    <img
                      src={"/assets/images/svg/amazon-original.svg"}
                      alt="twitter"
                      width={"25px"}
                    />
                  </button>
                </div>
                <div className={c.LinksBox}>
                  <button className="">
                    <img
                      src={"/assets/images/svg/android-original.svg"}
                      alt="twitter"
                      width={"25px"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={c.section}>
          <div className="d-flex justify-content-between align-items-center">
            <div className={"d-flex flex-column " + c.sectBody4}>
              <h1>Share your photos with friends easily</h1>
              <div className="d-flex align-items-center">
                <div className={c.imgBox}>
                  <img
                    src={"/assets/images/svg/shopify.svg"}
                    alt={"listing"}
                    height={"25px"}
                    width={"25px"}
                  />
                </div>
                <p>
                  Suspendisse et accumsan justo. Proin quis mi lorem. Donec
                  lobortis efficitur tortor sed tincidunt. Proin sit amet augue
                  eu nunc posuere rutrum eu ut mi
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className={c.imgBox}>
                  <img
                    src={"/assets/images/svg/atlassian.svg"}
                    alt={"listing"}
                    height={"25px"}
                    width={"25px"}
                  />
                </div>
                <p>
                  Suspendisse et accumsan justo. Proin quis mi lorem. Donec
                  lobortis efficitur tortor sed tincidunt. Proin sit amet augue
                  eu nunc posuere rutrum eu ut mi
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className={c.imgBox}>
                  <img
                    src={"/assets/images/svg/library.svg"}
                    alt={"listing"}
                    height={"25px"}
                    width={"25px"}
                  />
                </div>
                <p>
                  Suspendisse et accumsan justo. Proin quis mi lorem. Donec
                  lobortis efficitur tortor sed tincidunt. Proin sit amet augue
                  eu nunc posuere rutrum eu ut mi
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className={c.imgBox}>
                  <img
                    src={"/assets/images/svg/envato.svg"}
                    alt={"listing"}
                    height={"25px"}
                    width={"25px"}
                  />
                </div>
                <p>
                  Suspendisse et accumsan justo. Proin quis mi lorem. Donec
                  lobortis efficitur tortor sed tincidunt. Proin sit amet augue
                  eu nunc posuere rutrum eu ut mi
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className={c.imgBox}>
                  <img
                    src={"/assets/images/svg/drop.svg"}
                    alt={"listing"}
                    height={"25px"}
                    width={"25px"}
                  />
                </div>
                <p>
                  Suspendisse et accumsan justo. Proin quis mi lorem. Donec
                  lobortis efficitur tortor sed tincidunt. Proin sit amet augue
                  eu nunc posuere rutrum eu ut mi
                </p>
              </div>
              <button className={c.LearnMore}> Learn More</button>
            </div>
            <div>
              <img src={"/assets/images/png/thumb-2.png"} alt={"thumb-2"} />
            </div>
          </div>
        </section>

        <section className={c.section}>
          <div className={"d-flex flex-column align-items-center text-center "}>
            <div className={"d-flex flex-column " + c.sectTitle5}>
              <h1>Code Challenge</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                euismod quam dolor. Vestibulum non lobortis nisl.
              </p>
            </div>

            <div className={"d-flex align-items-center " + c.sectBody5}>
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/cloud-download.svg"}
                  alt="pointer"
                  height={"50px"}
                  width={"50px"}
                />
                <h2>Install the App</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
              <div className="d-flex">
                <img
                  src={"/assets/images/svg/chevron-right.svg"}
                  alt="arrow"
                  height={"30px"}
                  width={"30px"}
                />
              </div>
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/mobile.svg"}
                  alt="pointer"
                  height={"50px"}
                  width={"50px"}
                />
                <h2>Setup your profile</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
              <div className="d-flex">
                <img
                  src={"/assets/images/svg/chevron-right.svg"}
                  alt="arrow"
                  height={"30px"}
                  width={"30px"}
                />
              </div>
              <div className="d-flex flex-column ">
                <img
                  src={"/assets/images/svg/control-panel.svg"}
                  alt="pointer"
                  height={"50px"}
                  width={"50px"}
                />
                <h2>Enjoy the features</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={c.section}>
          <div className={"d-flex flex-column " + c.sectContainer6}>
            <div className={"d-flex flex-column text-center " + c.sectTitle6}>
              <h1>BASMA Code Challenge</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                euismod quam dolor. Vestibulum non lobortis nisl.
              </p>
            </div>

            <div className={"d-flex justify-content-center " + c.sectContent6}>
              <div className={"d-flex flex-column text-center " + c.PriceCard}>
                <img
                  src={"/assets/images/png/bike.png"}
                  alt={"Basic"}
                  height={"80px"}
                  width={"80px"}
                  className="svg-center"
                ></img>
                <h1>Basic</h1>
                <p className={c.Price}>
                  <span>$</span>49
                </p>
                <div
                  className={"d-flex flex-column text-center " + c.ListInCard}
                >
                  <ul>
                    <li>5GB Linux Web Space</li>
                    <li>5 MySQL Databases</li>
                    <li>24/7 Tech Support</li>
                    <li>Daily Backups</li>
                  </ul>
                </div>
                <div className={c.signUpButton}>
                  <button>Sign Up</button>
                </div>
              </div>

              <div className={"d-flex flex-column text-center " + c.PriceCard}>
                <img
                  src={"/assets/images/png/motorbike.png"}
                  alt={"Basic"}
                  height={"80px"}
                  width={"80px"}
                  className="svg-center"
                ></img>
                <h1>Pro</h1>
                <p className={c.Price}>
                  <span>$</span>65
                </p>
                <div
                  className={"d-flex flex-column text-center " + c.ListInCard}
                >
                  <ul>
                    <li>5GB Linux Web Space</li>
                    <li>5 MySQL Databases</li>
                    <li>24/7 Tech Support</li>
                    <li>Daily Backups</li>
                  </ul>
                </div>
                <div className={c.signUpButton}>
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={c.section}>
          <div
            className={
              "d-flex flex-column text-center align-items-center " +
              c.sectContainer7
            }
          >
            <div
              className={
                "d-flex flex-column text-center align-items-center " +
                c.sectTitle7
              }
            >
              <h1>BASMA is available for all devices</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                euismod quam dolor. Vestibulum non lobortis nisl.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nam euismod quam
                dolor. Vestibulum non lobortis nisl.
              </p>
            </div>
            <div
              className={
                "d-flex align-content-center justify-content-between " +
                c.sectContent7
              }
            >
              <img
                src={"/assets/images/png/google-play.png"}
                alt={"google-play"}
                height={"50px"}
                width={"auto"}
              />
              <img
                src={"/assets/images/png/app-store.png"}
                alt={"app-store"}
                height={"50px"}
                width={"auto"}
              />
            </div>
            <div>
              <p>
                <i>* Available on iPhone, iPad and all Android devices</i>
              </p>
            </div>
          </div>
        </section>

        <section className={c.section}>
          <div
            className={
              "d-flex flex-column align-items-center " + c.sectContainer8
            }
          >
            <div className={c.sectTitle8}>
              <div
                className={"d-flex flex-column text-center align-items-center "}
              >
                <h1>Subscribe to get updates</h1>
                <p>
                  By subscribin you will get newsleter, promotions sed turpis
                  consequat, suscipit orci vitae, sollicitudin ante. Cras nisi
                  ipsum, aliquet eu condimentum vel, malesuada pellentesque nisl
                </p>
              </div>
            </div>

            <div
              className={
                "d-flex flex-column text-center align-items-center " +
                c.secContent8
              }
            >
              <p>Enter Your Email</p>
              <form className="d-flex flex-column">
                <input type="email" placeholder="Email"></input>
                <button type="submit" onClick={() => {}}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className={c.section}>
          <div className={"d-flex flex-column " + c.sectContainer9}>
            <div
              className={
                "d-flex flex-column align-items-center text-center " +
                c.sectTitle9
              }
            >
              <h1>Stay Tuned</h1>
              <div className="Divider" style={{ width: "50px" }}></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                euismod quam dolor. Vestibulum non lobortis nisl.
              </p>
            </div>

            <div className={"d-flex justify-content-between " + c.sectContent9}>
              <div className={"d-flex flex-column " + c.sectContentSummary}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod quam dolor. Vestibulum non lobortis nisl. Integer
                  pretium scelerisque tortor quis vulputate. Nulla lectus
                  libero, egestas dignissim purus at, laoreet tempor quam. Sed
                  ultricies ante et justo malesuada volutpat. Suspendisse et
                  accumsan justo.
                </p>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className={c.imgBox}>
                      <img
                        src={"/assets/images/svg/form-house.svg"}
                        alt="form-house"
                        width={"20px"}
                        height={"20px"}
                      />
                    </div>
                    <p>
                      Vistublim nulla libra, canvallis, tincidunt, suscipt diam,
                      DC 2002
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className={c.imgBox}>
                      <img
                        src={"/assets/images/svg/form-phone.svg"}
                        alt="form-phone"
                        width={"20px"}
                        height={"20px"}
                      />
                    </div>
                    <p>+1230 456 789-012 345 6789</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className={c.imgBox}>
                      <img
                        src={"/assets/images/svg/form-mail.svg"}
                        alt="form-mail"
                        width={"20px"}
                        height={"20px"}
                      />
                    </div>
                    <p>examplepeldomine@domain.com</p>
                  </div>
                </div>
              </div>

              <div className={"d-flex flex-column  " + c.sendMsgForm}>
                <form onSubmit={() => alert("Sended Successfully")}>
                  <div className={c.inputCont}>
                    <input type={"text"} placeholder="Name" />
                  </div>
                  <div className={c.inputCont}>
                    <input type={"email"} placeholder="Email" />
                  </div>
                  <div className={c.inputCont}>
                    <input type={"text"} placeholder="Subject" />
                  </div>
                  <div className={c.textAreaCont}>
                    <textarea rows={5} cols={4} placeholder="Message" />
                  </div>
                  <button className={c.sendMSG} type="submit">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
