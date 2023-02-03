function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var fa = require('react-icons/fa');
var _ = require('lodash');
var ___default = _interopDefault(_);
var reactBootstrap = require('react-bootstrap');
var axios = _interopDefault(require('axios'));
var reactHookForm = require('react-hook-form');
var Select = require('react-select');
var Select__default = _interopDefault(Select);
var Dropdown = _interopDefault(require('react-bootstrap/Dropdown'));
var Slider = _interopDefault(require('react-slick'));
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');
require('react-google-recaptcha');
var Swal = _interopDefault(require('sweetalert2'));
var withReactContent = _interopDefault(require('sweetalert2-react-content'));

var styles = {"Register":"_styles-module__Register__2DywD"};

var styles$1 = {"FatfScreen":"_styles-module__FatfScreen__2ROgK","descriptionText":"_styles-module__descriptionText__2Vd8e","title":"_styles-module__title__35EYE","RegisterInput":"_styles-module__RegisterInput__gW7RG","item":"_styles-module__item__3hx7A","space_top":"_styles-module__space_top__yST6I","ErrorMessage":"_styles-module__ErrorMessage__qZ3vy","Link":"_styles-module__Link__1wNX0","Slider":"_styles-module__Slider__1Th7t","PhoneSelect":"_styles-module__PhoneSelect__1B3qM","CustomSelect":"_styles-module__CustomSelect__3bJjM","PhoneInput":"_styles-module__PhoneInput__2_4Q0","phonenumber_container":"_styles-module__phonenumber_container__HLp-P","RegisterScreen":"_styles-module__RegisterScreen__3hn-F","discountChristmas":"_styles-module__discountChristmas__i1zWx","CheckBox":"_styles-module__CheckBox__3klwe","button_wrapper":"_styles-module__button_wrapper__RJ7yj","Button":"_styles-module__Button__26moK","RegisterButton":"_styles-module__RegisterButton__1WoJs","RegisterLink":"_styles-module__RegisterLink__2p_CN","restricted_countries_wrapper":"_styles-module__restricted_countries_wrapper__5339W","restricted_countries_container":"_styles-module__restricted_countries_container__30wCB","restricted_countries_cols":"_styles-module__restricted_countries_cols__17jba","restricted_countries_cols_md":"_styles-module__restricted_countries_cols_md__wx9cR","listCollapse":"_styles-module__listCollapse__P54fa","active":"_styles-module__active__1yv7q","buttonCollapse":"_styles-module__buttonCollapse__BL6zk","isCollapse":"_styles-module__isCollapse__38GJw","iconCollapse":"_styles-module__iconCollapse__3YmIy","RegisterText":"_styles-module__RegisterText__3dZ-C","RegisterForm":"_styles-module__RegisterForm__2sn5j","formControl":"_styles-module__formControl__MkpSE","inputWrapper":"_styles-module__inputWrapper__u_8Hb","SelectWrapper":"_styles-module__SelectWrapper__2wTl0","CountrySelectWrapper":"_styles-module__CountrySelectWrapper__cRn99","dropdown_container":"_styles-module__dropdown_container__eAhCd","nationalitySelect":"_styles-module__nationalitySelect__3tlRp","nationalityLabel":"_styles-module__nationalityLabel__1-615","phonenumber_wrapper":"_styles-module__phonenumber_wrapper__3q5qp","trustpilot_wrapper":"_styles-module__trustpilot_wrapper__1PI3w","FormFooter":"_styles-module__FormFooter__29TuF","Body":"_styles-module__Body__3J0ny","noteText":"_styles-module__noteText__9TPd0"};

var restricted_countries = ['Cambodia', 'Jordan', 'Myanmar', 'Pakistan', 'Philippines', 'Syria', 'Turkey', 'Yemen', 'Iran', 'The Democratic People’s Republic of Korea', 'Iraq', 'Afghanistan', 'Turkmenistan', 'Albania', 'Gibraltar', 'Barbados', 'Haiti', 'Jamaica', 'US Virgin Islands', 'Trinidad and Tobago', 'Venezuela', 'Burkina Faso', 'Mali', 'Morocco', 'Senegal', 'South Sudan', 'Uganda', 'Somalia', 'Democratic Republic of the Congo', 'Sudan', 'Libya', 'Central African Republic', 'Nigeria', 'Burundi', 'Equatorial Guinea', 'Guinea-Bissau', 'Samoa', 'Fiji', 'Palau', 'American Samoa', 'Vanuatu', 'Guam', 'Niger', 'Crimea Region', 'Donetsk Region', 'Luhansk Region', 'Cuba', 'Tanzania', 'Mozambique'];
var FatfScreen = function FatfScreen(_ref) {
  var onReceiveData = _ref.onReceiveData;
  var _useState = React.useState(true),
    isCollapse = _useState[0],
    setIsCollapse = _useState[1];
  var handleCollapseToggle = function handleCollapseToggle() {
    if (isCollapse) {
      setIsCollapse(false);
    } else {
      setIsCollapse(true);
    }
  };
  return /*#__PURE__*/React__default.createElement("section", {
    className: styles$1.FatfScreen
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.space_top,
    style: {
      height: '95px'
    }
  }), /*#__PURE__*/React__default.createElement("h2", {
    className: styles$1.title
  }, "Restricted Industries"), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.descriptionText
  }, /*#__PURE__*/React__default.createElement("p", null, "Pursuant to the anti-money laundering and countering terrorism regulations, BBCIncorp will not provide our services for customers, who are involved in restricted industries including but not limited to:"), /*#__PURE__*/React__default.createElement("p", null, "Weapons dealing; Pornography/adult entertainment; Marijuana-related business; Money service business; Gambling-related business; Money remittance and payment services; Tobacco business; Alcohol business; Debt loan collection business; Precious metal trading business; sensitive virtual asset businesses.")), /*#__PURE__*/React__default.createElement("h2", {
    className: styles$1.title,
    style: {
      marginTop: "16px"
    }
  }, "Restricted Territories List"), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.descriptionText
  }, /*#__PURE__*/React__default.createElement("p", null, "Before proceeding to the incorporation process, kindly note that BBCIncorp DOES NOT provide services for nationalities under the below list."), /*#__PURE__*/React__default.createElement("p", null, "The list is made based on recommendations by credible sources such as FATF as part of our effort to comply with AML/CTF regulations and is reviewed and updated from time to time.")), /*#__PURE__*/React__default.createElement("div", {
    className: "px-3 p-lg-4 " + styles$1.restricted_countries_wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "" + styles$1.restricted_countries_container
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.listCollapse + " " + (!isCollapse && styles$1.active)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "" + styles$1.restricted_countries_cols
  }, new Array(3).fill(3).map(function (item, idx) {
    var count = restricted_countries.length / 3;
    return /*#__PURE__*/React__default.createElement("div", {
      key: idx,
      style: {
        flex: "1"
      }
    }, ___default.sortBy(restricted_countries).filter(function (item, index) {
      return index < (idx + 1) * count && index >= idx * count;
    }).map(function (item, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        key: index,
        className: styles$1.item + " mb-1"
      }, item);
    }));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "" + styles$1.restricted_countries_cols_md
  }, new Array(2).fill(2).map(function (item, idx) {
    var count = restricted_countries.length / 2;
    return /*#__PURE__*/React__default.createElement("div", {
      key: idx,
      style: {
        flex: "1"
      }
    }, ___default.sortBy(restricted_countries).filter(function (item, index) {
      return index < (idx + 1) * count && index >= idx * count;
    }).map(function (item, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        key: index,
        className: styles$1.item + " mb-1"
      }, item);
    }));
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.buttonCollapse + " " + (isCollapse && styles$1.isCollapse)
  }, /*#__PURE__*/React__default.createElement("button", {
    onClick: handleCollapseToggle
  }, isCollapse ? 'Expand' : 'Collapse', /*#__PURE__*/React__default.createElement(fa.FaAngleDoubleUp, {
    className: isCollapse && styles$1.iconCollapse
  }))))), /*#__PURE__*/React__default.createElement("p", {
    className: "mb-0 mt-2 mt-lg-0 " + styles$1.noteText
  }, /*#__PURE__*/React__default.createElement("b", null, "Note:"), " Nationalities under consideration are applicable to all members of your company, including directors, shareholders and beneficial owners."), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.button_wrapper
  }, /*#__PURE__*/React__default.createElement("button", {
    className: styles$1.Button + " btn py-2 px-4 rounded border-0 m-0",
    onClick: onReceiveData
  }, "I understand")));
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var useOnClickOutside = function useOnClickOutside(ref, handler) {
  React.useEffect(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(null);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return function () {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

var styles$2 = {"option_value":"_styles-module__option_value__3jhaM","selected_option":"_styles-module__selected_option__11dTO","select_panel":"_styles-module__select_panel__26kh6","dropdown_toggle":"_styles-module__dropdown_toggle__1UiJV","dropdown_menu":"_styles-module__dropdown_menu__2g-NS"};

var _excluded = ["data", "result", "children"],
  _excluded2 = ["value", "onChange", "toggleClass", "menuClass", "placeholder", "dropdown_container"];
var customStyles = {
  menu: function menu(provided) {
    return _extends({}, provided, {
      position: 'relative',
      boxShadow: 'none',
      marginBottom: 0
    });
  },
  control: function control(provided) {
    return _extends({}, provided, {
      margin: '0px 8px'
    });
  }
};
var _Option = function Option(_ref) {
  var data = _ref.data,
    result = _ref.result,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React__default.createElement(Select.components.Option, _extends({
    style: {
      padding: "0"
    },
    className: "" + (data && result && data.value === result.value ? "" + styles$2.selected_option : '')
  }, props), /*#__PURE__*/React__default.createElement("div", {
    style: {
      cursor: 'pointer'
    }
  }, children));
};
function SelectSearchInside(_ref2) {
  var value = _ref2.value,
    _onChange = _ref2.onChange,
    toggleClass = _ref2.toggleClass,
    menuClass = _ref2.menuClass,
    placeholder = _ref2.placeholder,
    dropdown_container = _ref2.dropdown_container,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var wrapperRef = React.useRef(null);
  var _useState = React.useState(false),
    show = _useState[0],
    setShow = _useState[1];
  var _useState2 = React.useState(value),
    temp = _useState2[0],
    setTemp = _useState2[1];
  var openMenu = function openMenu() {
    setShow(!show);
  };
  useOnClickOutside(wrapperRef, function () {
    setShow(false);
  });
  var getLabel = function getLabel() {
    if (value) {
      if (value.value && value.label && value.value !== '') {
        return /*#__PURE__*/React__default.createElement("div", {
          style: {
            whiteSpace: 'break-spaces'
          }
        }, value.label);
      }
    }
    if (temp) {
      if (temp.value && temp.label && temp.value !== '') {
        return /*#__PURE__*/React__default.createElement("div", {
          style: {
            whiteSpace: 'break-spaces'
          }
        }, temp.label);
      }
    }
    return /*#__PURE__*/React__default.createElement("div", {
      className: "text-muted",
      style: {
        whiteSpace: 'break-spaces'
      }
    }, placeholder ? placeholder : '');
  };
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React__default.createElement(Dropdown, {
    className: dropdown_container ? dropdown_container : '',
    ref: wrapperRef,
    style: {
      width: "100%",
      height: "100%"
    },
    show: show
  }, /*#__PURE__*/React__default.createElement(Dropdown.Toggle, {
    style: {
      display: "flex",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: show ? '#9c9c9c' : '#ccc'
    },
    className: "select-with-search-inside text-dark " + styles$2.dropdown_toggle + " " + (toggleClass ? ' ' + toggleClass : ''),
    onClick: openMenu
  }, getLabel(), /*#__PURE__*/React__default.createElement("div", {
    style: {
      minWidth: 13,
      marginTop: "4px"
    }
  }, /*#__PURE__*/React__default.createElement(fa.FaChevronDown, {
    size: 13,
    color: show ? '#6e6e6e' : '#ccc'
  }))), /*#__PURE__*/React__default.createElement(Dropdown.Menu, {
    className: styles$2.dropdown_menu + " " + (menuClass ? ' ' + menuClass : ''),
    show: show
  }, /*#__PURE__*/React__default.createElement("div", {
    id: "select-panel",
    className: styles$2.select_panel
  }, show ? /*#__PURE__*/React__default.createElement(Select__default, _extends({}, props, {
    styles: customStyles,
    autoFocus: true,
    menuIsOpen: true,
    components: {
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      },
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      Option: function Option(props) {
        return /*#__PURE__*/React__default.createElement(_Option, _extends({
          result: value ? value : temp
        }, props));
      }
    },
    onChange: function onChange(value) {
      if (_onChange) {
        _onChange(value);
      }
      setTemp(value);
      setShow(false);
    }
  })) : /*#__PURE__*/React__default.createElement("div", null)))));
}

var FormSwal = withReactContent(Swal);
var Trustpilot = function Trustpilot(_ref) {
  var data = _ref.data;
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true
  };
  return /*#__PURE__*/React__default.createElement(Slider, _extends({}, settings, {
    className: styles$1.Slider,
    style: {
      padding: "16px 20px 30px 20px"
    }
  }), data.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + styles$1.sliderItem,
      style: {
        height: "100%"
      },
      key: index
    }, /*#__PURE__*/React__default.createElement("img", {
      src: "https://test-site.bbcincorp.com/onboarding/custom-public/image/onboarding/trust-pilot.svg",
      className: "w-auto h-auto object-center object-cover",
      style: {
        width: "auto",
        height: "auto"
      },
      alt: "trustpilot"
    }), /*#__PURE__*/React__default.createElement("p", {
      style: {
        marginBottom: "0",
        marginTop: '0.625rem',
        color: '#717171'
      }
    }, item.content), /*#__PURE__*/React__default.createElement("p", {
      style: {
        textAlign: "right",
        marginBottom: "0",
        marginTop: '0.625rem',
        color: '#717171'
      }
    }, "Feedback from", ' ', /*#__PURE__*/React__default.createElement("span", {
      style: {
        fontWeight: "bold"
      }
    }, item.name)));
  }));
};
var RegisterScreen = function RegisterScreen(_ref2) {
  var _errors$first_name, _errors$email;
  var trustpilot = _ref2.trustpilot,
    isTypeChristmas = _ref2.isTypeChristmas;
  var _useState = React.useState(),
    customerCountry = _useState[0],
    setCustomerCountry = _useState[1];
  var _useState2 = React.useState(),
    countryList = _useState2[0],
    setCountryList = _useState2[1];
  var _useState3 = React.useState(),
    phoneCountry = _useState3[0],
    setPhoneCountry = _useState3[1];
  var _useState4 = React.useState(),
    phoneCodeList = _useState4[0],
    setPhoneCodeList = _useState4[1];
  var _useState5 = React.useState(),
    queryCountryId = _useState5[0],
    setQueryCountryId = _useState5[1];
  var _useState6 = React.useState(),
    queryCompanyName = _useState6[0],
    setQueryCompanyName = _useState6[1];
  var _useState7 = React.useState(),
    queryEntityTypeId = _useState7[0],
    setQueryEntityTypeId = _useState7[1];
  var _useState8 = React.useState(),
    queryPackageId = _useState8[0],
    setQueryPackageId = _useState8[1];
  var recaptchaRef = React.useRef();
  React.useEffect(function () {
    var getUrlVars = function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
      });
      return vars;
    };
    setQueryCountryId(getUrlVars()['country_id']);
    setQueryCompanyName(getUrlVars()['company_name']);
    setQueryEntityTypeId(getUrlVars()['entity_type_id']);
    setQueryPackageId(getUrlVars()['package_id']);
  }, []);
  var _useForm = reactHookForm.useForm(),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    reset = _useForm.reset,
    clearErrors = _useForm.clearErrors,
    setValue = _useForm.setValue,
    _useForm$formState = _useForm.formState,
    isSubmitting = _useForm$formState.isSubmitting,
    errors = _useForm$formState.errors;
  var handleChangeCountry = function handleChangeCountry(value) {
    setCustomerCountry(value.value);
  };
  var handleChangePhoneCountry = function handleChangePhoneCountry(value) {
    setPhoneCountry(value.value);
  };
  var onSubmit = function onSubmit(data) {
    try {
      data.country_id = customerCountry;
      data.phone_country_id = phoneCountry;
      if (data.register_checkbox) {
        data.contact_from_id = 15;
      } else {
        data.contact_from_id = 32;
      }
      delete data.register_checkbox;
      return Promise.resolve(recaptchaRef.current.executeAsync()).then(function (token) {
        if (token) {
          var GAUserID = getGAUserID();
          data.client_id = GAUserID ? GAUserID : '';
          data.website_id = 1;
          axios.post("https://core.test-lp.bbcincorp.com/api/onboarding/customer", data, {
            headers: {
              'captcha-response': token
            }
          }).then(function (response) {
            reset();
            clearErrors();
            if (response.data.state) {
              var _response$data;
              var myData = {
                first_name: data.first_name,
                email: data.email,
                country_id: data.country_id,
                phone_number: data.phone_number,
                phone_country_id: data.phone_country_id,
                signature: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data
              };
              var lastest_order_code = {};
              if (queryCountryId) {
                myData = _extends({}, myData, {
                  company_country_id: queryCountryId
                });
              }
              if (queryCompanyName) {
                myData = _extends({}, myData, {
                  company_name: queryCompanyName
                });
              }
              if (queryEntityTypeId && queryPackageId) {
                myData = _extends({}, myData, {
                  entity_type_id: queryEntityTypeId,
                  package_id: queryPackageId
                });
              }
              if (response.data.data.promotion_code) {
                lastest_order_code.promotion_code = response.data.data.promotion_code;
                window.localStorage.setItem('promotion_code', JSON.stringify(response.data.data.promotion_code));
              }
              if ('ordered_already' in response.data.data) {
                lastest_order_code.ordered_already = response.data.data.ordered_already;
              }
              if (lastest_order_code) {
                window.localStorage.setItem('lastest_order_code', JSON.stringify(lastest_order_code));
              }
              window.localStorage.setItem('form_first_name', JSON.stringify(myData.first_name));
              window.localStorage.setItem('customer', JSON.stringify(myData));
              window.localStorage.setItem('data_onboarding', JSON.stringify({
                incorporation: null,
                banking: null
              }));
              if (queryCountryId) {
                window.localStorage.setItem('layout', JSON.stringify({
                  type: 'incorporation'
                }));
                window.location.href = '/incorporation-country';
              } else {
                window.location.href = '/select-service';
              }
            } else {
              FormSwal.fire({
                icon: 'error',
                title: 'Send error'
              });
            }
          })["catch"](function (error) {
            clearErrors();
            FormSwal.fire({
              icon: 'error',
              title: 'Send error',
              text: error
            });
          });
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  React.useEffect(function () {
    axios.get("https://core.test-lp.bbcincorp.com/api/onboarding/country/cooperative").then(function (result) {
      var _result$data, _result$data2;
      var phoneList = result === null || result === void 0 ? void 0 : (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.data.map(function (item) {
        return _extends({}, item, {
          label: item.country_code + ' +' + item.phone_code,
          value: item.id
        });
      });
      setPhoneCodeList(phoneList);
      var countryList = result === null || result === void 0 ? void 0 : (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.data.map(function (item) {
        return _extends({}, item, {
          label: item.name,
          value: item.id
        });
      });
      setCountryList(countryList);
    });
  }, []);
  React.useEffect(function () {
    var data = JSON.parse(window.localStorage.getItem('customer'));
    if (data && data !== null && data !== void 0 && data.country_id && data !== null && data !== void 0 && data.phone_country_id) {
      setValue('first_name', data.first_name);
      setValue('email', data.email);
      setValue('phone_number', data.phone_number);
      setCustomerCountry(data.country_id);
      setPhoneCountry(data.phone_country_id);
    } else {
      axios.get("https://core.test-lp.bbcincorp.com/api/helper/geoLooking").then(function (result) {
        var _result$data3, _result$data3$data, _result$data4, _result$data4$data;
        setPhoneCountry(result === null || result === void 0 ? void 0 : (_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : (_result$data3$data = _result$data3.data) === null || _result$data3$data === void 0 ? void 0 : _result$data3$data.id);
        setCustomerCountry(result === null || result === void 0 ? void 0 : (_result$data4 = result.data) === null || _result$data4 === void 0 ? void 0 : (_result$data4$data = _result$data4.data) === null || _result$data4$data === void 0 ? void 0 : _result$data4$data.id);
      });
    }
  }, []);
  React.useEffect(function () {
    var promotion_code = JSON.parse(window.localStorage.getItem('promotion_code'));
    if (promotion_code) {
      window.localStorage.removeItem('promotion_code');
    }
  }, []);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("section", {
    className: styles$1.RegisterScreen
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.space_top,
    style: {
      height: '50px',
      marginBottom: "40px"
    }
  }), /*#__PURE__*/React__default.createElement("h2", {
    className: styles$1.title
  }, "Ready to start your company in just a few steps"), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.Body
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.RegisterText
  }, "Please share a bit about yourself to stay connected. All information will be kept confidential and subject to our Privacy Policy."), isTypeChristmas && /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.discountChristmas
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "box-discount"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "number-discount"
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "number"
  }, "5", /*#__PURE__*/React__default.createElement("span", null, "%"))), /*#__PURE__*/React__default.createElement("div", {
    className: "box-content"
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "title-discount"
  }, "Discount is here"), /*#__PURE__*/React__default.createElement("p", {
    className: "des-discount"
  }, "Start your company with us!")))), /*#__PURE__*/React__default.createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    className: styles$1.RegisterForm
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.formControl
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.inputWrapper
  }, /*#__PURE__*/React__default.createElement("input", _extends({
    type: "text",
    className: styles$1.RegisterInput,
    placeholder: "Your name"
  }, register('first_name', {
    required: {
      value: true,
      message: 'This field is required'
    },
    maxLength: {
      value: 40,
      message: 'test'
    }
  }))), (errors === null || errors === void 0 ? void 0 : errors.first_name) && /*#__PURE__*/React__default.createElement("span", {
    className: styles$1.ErrorMessage
  }, errors === null || errors === void 0 ? void 0 : (_errors$first_name = errors.first_name) === null || _errors$first_name === void 0 ? void 0 : _errors$first_name.message)), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.SelectWrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.CountrySelectWrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.nationalitySelect
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1.nationalityLabel
  }, "Nationality"), /*#__PURE__*/React__default.createElement(SelectSearchInside, {
    value: countryList && countryList.find(function (item) {
      return item.value == customerCountry;
    }),
    dropdown_container: styles$1.dropdown_container,
    options: countryList,
    toggleClass: styles$1.CountrySelect + " " + styles$1.CheckBox,
    onChange: handleChangeCountry,
    menuClass: styles$1.Menu
  }))))), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.formControl
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.inputWrapper
  }, /*#__PURE__*/React__default.createElement("input", _extends({
    type: "email",
    className: styles$1.RegisterInput,
    placeholder: "Your email address"
  }, register('email', {
    required: {
      value: true,
      message: 'This field is required'
    },
    pattern: {
      value: /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]/,
      message: 'Invalid e-mail'
    }
  }))), (errors === null || errors === void 0 ? void 0 : errors.email) && /*#__PURE__*/React__default.createElement("span", {
    className: styles$1.ErrorMessage
  }, errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message)), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.SelectWrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.phonenumber_container
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.CustomSelect
  }, /*#__PURE__*/React__default.createElement(SelectSearchInside, {
    value: phoneCodeList && phoneCodeList.find(function (item) {
      return item.value == phoneCountry;
    }),
    options: phoneCodeList,
    toggleClass: styles$1.PhoneSelect,
    menuClass: "mt-2 " + styles$1.Menu,
    onChange: handleChangePhoneCountry
  })), /*#__PURE__*/React__default.createElement("input", _extends({
    type: "text",
    placeholder: "Phone number"
  }, register('phone_number'), {
    onKeyPress: function onKeyPress(event) {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    },
    className: styles$1.RegisterInput + " " + styles$1.PhoneInput
  }))))), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.RegisterText
  }, /*#__PURE__*/React__default.createElement("input", _extends({
    id: "register_checkbox",
    type: "checkbox",
    style: {
      userSelect: 'none',
      cursor: "pointer"
    },
    className: "rounded " + styles$1.CheckBox
  }, register('register_checkbox'))), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "register_checkbox",
    style: {
      marginLeft: "10px",
      cursor: "pointer"
    }
  }, "Sign up to BBCIncorp's mailing list for latest news and exclusive offers.")), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.FormFooter
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "submit",
    className: styles$1.RegisterButton + " " + styles$1.Button,
    disabled: isSubmitting
  }, isSubmitting ? /*#__PURE__*/React__default.createElement("span", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "mr-2"
  }, "Loading"), /*#__PURE__*/React__default.createElement(reactBootstrap.Spinner, {
    as: "span",
    animation: "border",
    role: "status",
    "aria-hidden": "true",
    size: "sm"
  })) : 'Start my business'), /*#__PURE__*/React__default.createElement("a", {
    style: {
      fontWeight: "600"
    },
    className: styles$1.RegisterLink + " " + styles$1.Link,
    href: "https://test-dashboard.bbcincorp.com/auth/login"
  }, "Already have an account?"))))), /*#__PURE__*/React__default.createElement("section", {
    style: {
      width: "100%",
      display: "flex",
      marginTop: "1.5rem"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.trustpilot_wrapper
  }, /*#__PURE__*/React__default.createElement(Trustpilot, {
    data: trustpilot
  }))));
};

var trust_pilot = [
	{
		name: "Sam",
		content: "\"BBCIncorp provided excellent services by timely incorporating our client's company in the Bahamas. Their response time and costs are much better than their competition.\""
	},
	{
		name: "Mochi",
		content: "\"Having worked with many agents and local specialists around the world, I can confidentially say my experience with Linda and her team; was the best experience by far. The team at BBCIncorp is knowledgeable, friendly and efficient. I highly recommend this firm to anyone who needs a reliable partner and formation agent.\""
	},
	{
		name: "Charlie Ellington",
		content: "\"Fantastic service and communication. A fast and easy turn-around. I choose this company because others from a Google search didn't seem legitimate. For example, asking for a bank transfer and no reviews. With this team I could see the reviews and pay by Paypal for reassurance. I hope this review helps someone pick the team.\""
	},
	{
		name: "Mahmut T.",
		content: "\"Just professionals! Good service and trustable. Thanks Laura!\""
	},
	{
		name: "Jose C.",
		content: "\"They are very professional, fast and very clear. They are always there to response in the best professional way\""
	},
	{
		name: "Arman",
		content: "\"BBCIncorp team was really helpful, despite time zones Linda (contact person) answered all my questions being out of office, minor delays took place due to COVID, despite that I would recommend Company for everyone.\""
	},
	{
		name: "Rebecca Ho",
		content: "\"Ms Linda is very helpful and fast response. Great service.\""
	},
	{
		name: "Denis Valcu",
		content: "\"5-star deserved! BBCincorp helped me a lot to start my company in Hong Kong and there support is also 5-star! I recommed for all who want to start an offshore company to start with them!\""
	},
	{
		name: "Venkat",
		content: "\"BBCIncorp is one of the best consultant with fast response and prompt service provider in HK. We successfully incorporated our company in Hong Kong within a day. Ms.Katy Lee is very responsive and we extremely satisfied with her assistance during the company registration.\""
	},
	{
		name: "Adrian VB",
		content: "\"Great advice and extremely helpful staff helped us achieve our company setup and opening of our bank account. Need to add that replies to emails are always timely and will be availing their accounting services as well. 5 Stars!\""
	}
];
var data = {
	trust_pilot: trust_pilot
};

function Register(_ref) {
  var isTypeChristmas = _ref.isTypeChristmas;
  var _useState = React.useState(true),
    fatfScreen = _useState[0],
    setFatfScreen = _useState[1];
  var onReceiveData = function onReceiveData(value) {
    setFatfScreen(value);
  };
  var receiveData = function receiveData() {
    setFatfScreen(false);
    onReceiveData(false);
    localStorage.setItem('setExpirationDateObd', new Date().getTime());
  };
  React.useEffect(function () {
    var hours = 24;
    var now = new Date().getTime();
    var expirationDateObd = localStorage.getItem('setExpirationDateObd');
    if (expirationDateObd !== null && now - expirationDateObd < hours * 60 * 60 * 1000) {
      setFatfScreen(false);
      onReceiveData(false);
    } else {
      localStorage.removeItem('setExpirationDateObd');
    }
  }, []);
  return /*#__PURE__*/React__default.createElement("div", null, fatfScreen ? /*#__PURE__*/React__default.createElement(FatfScreen, {
    onReceiveData: receiveData
  }) : /*#__PURE__*/React__default.createElement(RegisterScreen, {
    trustpilot: data.trust_pilot,
    isTypeChristmas: isTypeChristmas
  }));
}

var ExampleComponent = function ExampleComponent(_ref) {
  var isTypeChristmas = _ref.isTypeChristmas;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.Register
  }, /*#__PURE__*/React__default.createElement(Register, {
    isTypeChristmas: isTypeChristmas
  }));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
