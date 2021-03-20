import { Component } from "react";
import { withTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="footer_top">
            <div className="wrap">
              <div className="wrap_float">
                <div className="footer_head_mobile">
                  <div className="logo">lavella</div>
                  <div className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </div>
                </div>
                <div className="footer_top_menu">
                  <ul>
                    <li>
                      <a>Home</a>
                    </li>
                    <li className="dropdown_li">
                      <a>About</a>
                    </li>
                    <li className="dropdown_li">
                      <a>Services</a>
                    </li>
                    <li className="dropdown_li">
                      <a>Destination</a>
                    </li>
                    <li className="dropdown_li">
                      <a>Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="socials">
                  <a href="#" className="a facebook"></a>
                  <a href="#" className="a instagram"></a>
                  <a href="#" className="a pinterest"></a>
                  <a href="#" className="a twitter"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_center">
            <div className="wrap">
              <div className="wrap_float">
                <form class="w-full max-w-full">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                      <p class="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      >
                        E-mail
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                      />
                      <p class="text-gray-600 text-xs italic">
                        Some tips - as long as needed
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      >
                        Message
                      </label>
                      <textarea
                        class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        id="message"
                      ></textarea>
                      <p class="text-gray-600 text-xs italic">
                        Re-size can be disabled by set by resize-none / resize-y
                        / resize-x / resize
                      </p>
                    </div>
                  </div>
                  <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                      <button
                        class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                      >
                        Send
                      </button>
                    </div>
                    <div class="md:w-2/3"></div>
                  </div>
                </form>
                <div className="contacts-page">
                  <div className="content-head">
                    <div className="contacts-columns">
                      <div className="column tel">
                        <div className="_title">Phone</div>
                        <div className="text">
                          A wonderful serenity has taken possession of my entire
                          soul, like these
                        </div>
                        <a href="#">+1 1235 6789 10</a>
                      </div>
                      <div className="column email">
                        <div className="_title">Email</div>
                        <div className="text">
                          A wonderful serenity has taken possession of my entire
                          soul, like these
                        </div>
                        <a href="#">info@hellodigi.ru</a>
                      </div>
                      <div className="column location">
                        <div className="_title">Location</div>
                        <div className="text">12 Main Street Pt. London</div>
                        <a href="#">View On Google Map</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/**
                 *
                 */}

                <div className="mobile_socials">
                  <a href="#" className="a facebook"></a>
                  <a href="#" className="a instagram"></a>
                  <a href="#" className="a pinterest"></a>
                  <a href="#" className="a twitter"></a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer_bottom">
            Copyright 2020 <a href="#">hellodigi.ru</a> | All Right Reserved
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(Footer);
