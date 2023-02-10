import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDoubleUp, FaChevronDown, FaCheck, FaTimes, FaAngleDoubleDown, FaInfoCircle, FaCircle, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import _ from 'lodash';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Select, { components } from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import trust_pilot$1 from './trust-pilot~VtJXwXCM.svg';
import bankingImg from './banking~nKuKLkod.png';
import incorpImg from './incorporation~BKidfgKY.png';
import { FiFilter } from 'react-icons/fi';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import DropdownButton from 'react-multiselect-checkboxes/lib/DropdownButton';
import Blanket from 'react-multiselect-checkboxes/lib/Blanket';
import parser from 'html-react-parser';
import { Range, getTrackBackground } from 'react-range';
import annualCompliance from './annual-compliance~hxUQxQXW.png';
import localTax from './local-tax-profile~bowpEaUS.png';
import businessStructure from './business-structure~YXCLGhtj.png';
import initialRequirement from './initial-requirement~xRxcNttm.png';
import legalStructure from './legal-structure~bcmAHTxj.png';
import internationalCompliance from './international-compliance~tYiEjqmz.png';
import { IconContext } from 'react-icons';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IoMdCloseCircle } from 'react-icons/io';
import comparisonTable from './comparison-table~bpwyRZHM.png';
import mergeProps from 'merge-props';
import buildingImg from './building~IFwjSqIH.png';

var styles = {"FatfScreen":"_styles-module__FatfScreen__2ROgK","descriptionText":"_styles-module__descriptionText__2Vd8e","title":"_styles-module__title__35EYE","RegisterInput":"_styles-module__RegisterInput__gW7RG","item":"_styles-module__item__3hx7A","space_top":"_styles-module__space_top__yST6I","ErrorMessage":"_styles-module__ErrorMessage__qZ3vy","Link":"_styles-module__Link__1wNX0","Slider":"_styles-module__Slider__1Th7t","PhoneSelect":"_styles-module__PhoneSelect__1B3qM","CustomSelect":"_styles-module__CustomSelect__3bJjM","PhoneInput":"_styles-module__PhoneInput__2_4Q0","phonenumber_container":"_styles-module__phonenumber_container__HLp-P","RegisterScreen":"_styles-module__RegisterScreen__3hn-F","discountChristmas":"_styles-module__discountChristmas__i1zWx","CheckBox":"_styles-module__CheckBox__3klwe","button_wrapper":"_styles-module__button_wrapper__RJ7yj","Button":"_styles-module__Button__26moK","RegisterButton":"_styles-module__RegisterButton__1WoJs","RegisterLink":"_styles-module__RegisterLink__2p_CN","restricted_countries_wrapper":"_styles-module__restricted_countries_wrapper__5339W","restricted_countries_container":"_styles-module__restricted_countries_container__30wCB","restricted_countries_cols":"_styles-module__restricted_countries_cols__17jba","restricted_countries_cols_md":"_styles-module__restricted_countries_cols_md__wx9cR","listCollapse":"_styles-module__listCollapse__P54fa","active":"_styles-module__active__1yv7q","buttonCollapse":"_styles-module__buttonCollapse__BL6zk","isCollapse":"_styles-module__isCollapse__38GJw","iconCollapse":"_styles-module__iconCollapse__3YmIy","RegisterText":"_styles-module__RegisterText__3dZ-C","RegisterForm":"_styles-module__RegisterForm__2sn5j","formControl":"_styles-module__formControl__MkpSE","inputWrapper":"_styles-module__inputWrapper__u_8Hb","SelectWrapper":"_styles-module__SelectWrapper__2wTl0","CountrySelectWrapper":"_styles-module__CountrySelectWrapper__cRn99","nationalitySelect":"_styles-module__nationalitySelect__3tlRp","nationalityLabel":"_styles-module__nationalityLabel__1-615","phonenumber_wrapper":"_styles-module__phonenumber_wrapper__3q5qp","trustpilot_wrapper":"_styles-module__trustpilot_wrapper__1PI3w","FormFooter":"_styles-module__FormFooter__29TuF","Body":"_styles-module__Body__3J0ny","noteText":"_styles-module__noteText__9TPd0"};

var restricted_countries = ['Cambodia', 'Jordan', 'Myanmar', 'Pakistan', 'Philippines', 'Syria', 'Turkey', 'Yemen', 'Iran', 'The Democratic People’s Republic of Korea', 'Iraq', 'Afghanistan', 'Turkmenistan', 'Albania', 'Gibraltar', 'Barbados', 'Haiti', 'Jamaica', 'US Virgin Islands', 'Trinidad and Tobago', 'Venezuela', 'Burkina Faso', 'Mali', 'Morocco', 'Senegal', 'South Sudan', 'Uganda', 'Somalia', 'Democratic Republic of the Congo', 'Sudan', 'Libya', 'Central African Republic', 'Nigeria', 'Burundi', 'Equatorial Guinea', 'Guinea-Bissau', 'Samoa', 'Fiji', 'Palau', 'American Samoa', 'Vanuatu', 'Guam', 'Niger', 'Crimea Region', 'Donetsk Region', 'Luhansk Region', 'Cuba', 'Tanzania', 'Mozambique'];
const FatfScreen = ({
  onReceiveData
}) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const handleCollapseToggle = () => {
    if (isCollapse) {
      setIsCollapse(false);
    } else {
      setIsCollapse(true);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: styles.FatfScreen
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.space_top,
    style: {
      height: '95px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: styles.title
  }, "Restricted Industries"), /*#__PURE__*/React.createElement("div", {
    className: styles.descriptionText
  }, /*#__PURE__*/React.createElement("p", null, "Pursuant to the anti-money laundering and countering terrorism regulations, BBCIncorp will not provide our services for customers, who are involved in restricted industries including but not limited to:"), /*#__PURE__*/React.createElement("p", null, "Weapons dealing; Pornography/adult entertainment; Marijuana-related business; Money service business; Gambling-related business; Money remittance and payment services; Tobacco business; Alcohol business; Debt loan collection business; Precious metal trading business; sensitive virtual asset businesses.")), /*#__PURE__*/React.createElement("h2", {
    className: styles.title,
    style: {
      marginTop: `16px`
    }
  }, "Restricted Territories List"), /*#__PURE__*/React.createElement("div", {
    className: styles.descriptionText
  }, /*#__PURE__*/React.createElement("p", null, "Before proceeding to the incorporation process, kindly note that BBCIncorp DOES NOT provide services for nationalities under the below list."), /*#__PURE__*/React.createElement("p", null, "The list is made based on recommendations by credible sources such as FATF as part of our effort to comply with AML/CTF regulations and is reviewed and updated from time to time.")), /*#__PURE__*/React.createElement("div", {
    className: `px-3 p-lg-4 ${styles.restricted_countries_wrapper}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.restricted_countries_container}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.listCollapse} ${!isCollapse && styles.active}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.restricted_countries_cols}`
  }, new Array(3).fill(3).map((item, idx) => {
    let count = restricted_countries.length / 3;
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        flex: `1`
      }
    }, _.sortBy(restricted_countries).filter((item, index) => index < (idx + 1) * count && index >= idx * count).map((item, index) => {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: `${styles.item} mb-1`
      }, item);
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: `${styles.restricted_countries_cols_md}`
  }, new Array(2).fill(2).map((item, idx) => {
    let count = restricted_countries.length / 2;
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        flex: `1`
      }
    }, _.sortBy(restricted_countries).filter((item, index) => index < (idx + 1) * count && index >= idx * count).map((item, index) => {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: `${styles.item} mb-1`
      }, item);
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: `${styles.buttonCollapse} ${isCollapse && styles.isCollapse}`
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleCollapseToggle
  }, isCollapse ? 'Expand' : 'Collapse', /*#__PURE__*/React.createElement(FaAngleDoubleUp, {
    className: isCollapse && styles.iconCollapse
  }))))), /*#__PURE__*/React.createElement("p", {
    className: `mb-0 mt-2 mt-lg-0 ${styles.noteText}`
  }, /*#__PURE__*/React.createElement("b", null, "Note:"), " Nationalities under consideration are applicable to all members of your company, including directors, shareholders and beneficial owners."), /*#__PURE__*/React.createElement("div", {
    className: styles.button_wrapper
  }, /*#__PURE__*/React.createElement("button", {
    className: `${styles.Button} btn py-2 px-4 rounded border-0 m-0`,
    onClick: onReceiveData
  }, "I understand")));
};

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(null);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
const getGAUserID = () => {
  try {
    var trackers = ga.getAll();
    var i, len;
    for (i = 0, len = trackers.length; i < len; i += 1) {
      if (trackers[i].get('trackingId') === process.env.NEXT_PUBLIC_GA_ID) {
        return trackers[i].get('clientId');
      }
    }
  } catch (e) {}
  return false;
};
const sanitizeTitle = title => {
  var diacriticsMap;
  return removeSingleTrailingDash(replaceSpacesWithDash(removeHTMLEntities(removeAccents(title.replace(/<[^>]+>/gi, '')).toLowerCase().replace(/&(?:(?:nbsp)|(?:ndash)|(?:mdash));/g, '-')).replace(/[\/\.]/g, '-').replace(/[^\w\s-]+/g, '')));
  function removeHTMLEntities(str) {
    return str.replace(/&.*?;/g, '');
  }
  function replaceSpacesWithDash(str) {
    return str.replace(/ +/g, '-').replace(/-{2,}/g, '-');
  }
  function removeSingleTrailingDash(str) {
    if ('-' === str.substr(str.length - 1)) {
      return str.substr(0, str.length - 1);
    }
    return str;
  }
  function getDiacriticsRemovalMap() {
    if (diacriticsMap) {
      return diacriticsMap;
    }
    var defaultDiacriticsRemovalMap = [{
      base: '-',
      letters: '\u2013\u2014\u00A0'
    }, {
      base: 'A',
      letters: '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
    }, {
      base: 'AA',
      letters: '\uA732'
    }, {
      base: 'AE',
      letters: '\u00C6\u01FC\u01E2'
    }, {
      base: 'AO',
      letters: '\uA734'
    }, {
      base: 'AU',
      letters: '\uA736'
    }, {
      base: 'AV',
      letters: '\uA738\uA73A'
    }, {
      base: 'AY',
      letters: '\uA73C'
    }, {
      base: 'B',
      letters: '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
    }, {
      base: 'C',
      letters: '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
    }, {
      base: 'D',
      letters: '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0'
    }, {
      base: 'DZ',
      letters: '\u01F1\u01C4'
    }, {
      base: 'Dz',
      letters: '\u01F2\u01C5'
    }, {
      base: 'E',
      letters: '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
    }, {
      base: 'F',
      letters: '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
    }, {
      base: 'G',
      letters: '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
    }, {
      base: 'H',
      letters: '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
    }, {
      base: 'I',
      letters: '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
    }, {
      base: 'J',
      letters: '\u004A\u24BF\uFF2A\u0134\u0248'
    }, {
      base: 'K',
      letters: '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
    }, {
      base: 'L',
      letters: '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
    }, {
      base: 'LJ',
      letters: '\u01C7'
    }, {
      base: 'Lj',
      letters: '\u01C8'
    }, {
      base: 'M',
      letters: '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
    }, {
      base: 'N',
      letters: '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
    }, {
      base: 'NJ',
      letters: '\u01CA'
    }, {
      base: 'Nj',
      letters: '\u01CB'
    }, {
      base: 'O',
      letters: '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
    }, {
      base: 'OI',
      letters: '\u01A2'
    }, {
      base: 'OO',
      letters: '\uA74E'
    }, {
      base: 'OU',
      letters: '\u0222'
    }, {
      base: 'OE',
      letters: '\u008C\u0152'
    }, {
      base: 'oe',
      letters: '\u009C\u0153'
    }, {
      base: 'P',
      letters: '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
    }, {
      base: 'Q',
      letters: '\u0051\u24C6\uFF31\uA756\uA758\u024A'
    }, {
      base: 'R',
      letters: '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
    }, {
      base: 'S',
      letters: '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
    }, {
      base: 'T',
      letters: '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
    }, {
      base: 'TZ',
      letters: '\uA728'
    }, {
      base: 'U',
      letters: '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
    }, {
      base: 'V',
      letters: '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
    }, {
      base: 'VY',
      letters: '\uA760'
    }, {
      base: 'W',
      letters: '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
    }, {
      base: 'X',
      letters: '\u0058\u24CD\uFF38\u1E8A\u1E8C'
    }, {
      base: 'Y',
      letters: '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
    }, {
      base: 'Z',
      letters: '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
    }, {
      base: 'a',
      letters: '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
    }, {
      base: 'aa',
      letters: '\uA733'
    }, {
      base: 'ae',
      letters: '\u00E6\u01FD\u01E3'
    }, {
      base: 'ao',
      letters: '\uA735'
    }, {
      base: 'au',
      letters: '\uA737'
    }, {
      base: 'av',
      letters: '\uA739\uA73B'
    }, {
      base: 'ay',
      letters: '\uA73D'
    }, {
      base: 'b',
      letters: '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
    }, {
      base: 'c',
      letters: '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
    }, {
      base: 'd',
      letters: '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
    }, {
      base: 'dz',
      letters: '\u01F3\u01C6'
    }, {
      base: 'e',
      letters: '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
    }, {
      base: 'f',
      letters: '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
    }, {
      base: 'g',
      letters: '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
    }, {
      base: 'h',
      letters: '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
    }, {
      base: 'hv',
      letters: '\u0195'
    }, {
      base: 'i',
      letters: '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
    }, {
      base: 'j',
      letters: '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
    }, {
      base: 'k',
      letters: '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
    }, {
      base: 'l',
      letters: '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
    }, {
      base: 'lj',
      letters: '\u01C9'
    }, {
      base: 'm',
      letters: '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
    }, {
      base: 'n',
      letters: '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
    }, {
      base: 'nj',
      letters: '\u01CC'
    }, {
      base: 'o',
      letters: '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
    }, {
      base: 'oi',
      letters: '\u01A3'
    }, {
      base: 'ou',
      letters: '\u0223'
    }, {
      base: 'oo',
      letters: '\uA74F'
    }, {
      base: 'p',
      letters: '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
    }, {
      base: 'q',
      letters: '\u0071\u24E0\uFF51\u024B\uA757\uA759'
    }, {
      base: 'r',
      letters: '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
    }, {
      base: 's',
      letters: '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
    }, {
      base: 't',
      letters: '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
    }, {
      base: 'tz',
      letters: '\uA729'
    }, {
      base: 'u',
      letters: '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
    }, {
      base: 'v',
      letters: '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
    }, {
      base: 'vy',
      letters: '\uA761'
    }, {
      base: 'w',
      letters: '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
    }, {
      base: 'x',
      letters: '\u0078\u24E7\uFF58\u1E8B\u1E8D'
    }, {
      base: 'y',
      letters: '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
    }, {
      base: 'z',
      letters: '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
    }];
    diacriticsMap = {};
    for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
      var letters = defaultDiacriticsRemovalMap[i].letters;
      for (var j = 0; j < letters.length; j++) {
        diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
      }
    }
    return diacriticsMap;
  }
  function removeAccents(str) {
    diacriticsMap = getDiacriticsRemovalMap();
    return str.replace(/[^\u0000-\u007E]/g, function (a) {
      return diacriticsMap[a] || a;
    });
  }
};

var styles$1 = {"option_value":"_styles-module__option_value__2TkBO","selected_option":"_styles-module__selected_option__10wda","select_panel":"_styles-module__select_panel__2zR0k","dropdown_toggle":"_styles-module__dropdown_toggle__32V9c","dropdown_menu":"_styles-module__dropdown_menu__2zSL3"};

const customStyles = {
  menu: provided => ({
    ...provided,
    position: 'relative',
    boxShadow: 'none',
    marginBottom: 0
  }),
  control: provided => ({
    ...provided,
    margin: '0px 8px'
  })
};
const Option = ({
  data,
  result,
  children,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(components.Option, Object.assign({
    style: {
      padding: `0`
    },
    className: `${data && result && data.value === result.value ? `${styles$1.selected_option}` : ''}`
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer'
    }
  }, children));
};
function SelectSearchInside({
  value,
  onChange,
  toggleClass,
  menuClass,
  placeholder,
  selectBorder,
  dropdown_container,
  ...props
}) {
  const wrapperRef = useRef(null);
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState(value);
  const openMenu = () => {
    setShow(!show);
  };
  useOnClickOutside(wrapperRef, () => {
    setShow(false);
  });
  const getLabel = () => {
    if (value) {
      if (value.value && value.label && value.value !== '') {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            whiteSpace: 'break-spaces'
          }
        }, value.label);
      }
    }
    if (temp) {
      if (temp.value && temp.label && temp.value !== '') {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            whiteSpace: 'break-spaces'
          }
        }, temp.label);
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "text-muted",
      style: {
        whiteSpace: 'break-spaces'
      }
    }, placeholder ? placeholder : '');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: `100%`
    }
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: dropdown_container ? dropdown_container : '',
    ref: wrapperRef,
    style: {
      width: `100%`,
      height: `100%`
    },
    show: show
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    style: {
      display: `flex`,
      justifyContent: `space-between`,
      borderWidth: 1,
      border: `${selectBorder ? '1px solid rgb(204, 204, 204)' : ''}`,
      borderRadius: '0.25rem',
      cursor: 'pointer'
    },
    className: `select-with-search-inside text-dark ${styles$1.dropdown_toggle} ${toggleClass ? ' ' + toggleClass : ''}`,
    onClick: openMenu
  }, getLabel(), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 13,
      marginTop: `4px`
    }
  }, /*#__PURE__*/React.createElement(FaChevronDown, {
    size: 13,
    color: show ? '#6e6e6e' : '#ccc'
  }))), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    className: `${styles$1.dropdown_menu} ${menuClass ? ' ' + menuClass : ''}`,
    show: show
  }, /*#__PURE__*/React.createElement("div", {
    id: "select-panel",
    className: styles$1.select_panel
  }, show ? /*#__PURE__*/React.createElement(Select, Object.assign({}, props, {
    styles: customStyles,
    autoFocus: true,
    menuIsOpen: true,
    components: {
      IndicatorSeparator: () => null,
      DropdownIndicator: () => null,
      Option: props => /*#__PURE__*/React.createElement(Option, Object.assign({
        result: value ? value : temp
      }, props))
    },
    onChange: value => {
      if (onChange) {
        onChange(value);
      }
      setTemp(value);
      setShow(false);
    }
  })) : /*#__PURE__*/React.createElement("div", null)))));
}

const FormSwal = withReactContent(Swal);
const Trustpilot = ({
  data
}) => {
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
  return /*#__PURE__*/React.createElement(Slider, Object.assign({}, settings, {
    className: styles.Slider,
    style: {
      padding: `16px 20px 30px 20px`
    }
  }), data.map((item, index) => /*#__PURE__*/React.createElement("div", {
    className: `${styles.sliderItem}`,
    style: {
      height: `100%`
    },
    key: index
  }, /*#__PURE__*/React.createElement("img", {
    src: trust_pilot$1,
    className: "w-auto h-auto object-center object-cover",
    style: {
      width: `auto`,
      height: `auto`
    },
    alt: "trustpilot"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: `0`,
      marginTop: '0.625rem',
      color: '#717171'
    }
  }, item.content), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: `right`,
      marginBottom: `0`,
      marginTop: '0.625rem',
      color: '#717171'
    }
  }, "Feedback from", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: `bold`
    }
  }, item.name)))));
};
const RegisterScreen = ({
  trustpilot,
  isTypeChristmas
}) => {
  var _errors$first_name, _errors$email;
  const [customerCountry, setCustomerCountry] = useState();
  const [countryList, setCountryList] = useState();
  const [phoneCountry, setPhoneCountry] = useState();
  const [phoneCodeList, setPhoneCodeList] = useState();
  const [queryCountryId, setQueryCountryId] = useState();
  const [queryCompanyName, setQueryCompanyName] = useState();
  const [queryEntityTypeId, setQueryEntityTypeId] = useState();
  const [queryPackageId, setQueryPackageId] = useState();
  const recaptchaRef = useRef();
  const getUrlVars = () => {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  };
  useEffect(() => {
    setQueryCountryId(getUrlVars()['country_id']);
    setQueryCompanyName(getUrlVars()['company_name']);
    setQueryEntityTypeId(getUrlVars()['entity_type_id']);
    setQueryPackageId(getUrlVars()['package_id']);
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    formState: {
      isSubmitting,
      errors
    }
  } = useForm();
  const handleChangeCountry = value => {
    setCustomerCountry(value.value);
  };
  const handleChangePhoneCountry = value => {
    setPhoneCountry(value.value);
  };
  const onSubmit = async data => {
    data.country_id = customerCountry;
    data.phone_country_id = phoneCountry;
    if (data.register_checkbox) {
      data.contact_from_id = 15;
    } else {
      data.contact_from_id = 32;
    }
    delete data.register_checkbox;
    const token = await recaptchaRef.current.executeAsync();
    if (token) {
      let GAUserID = getGAUserID();
      data.client_id = GAUserID ? GAUserID : '';
      data.website_id = 1;
      axios.post(`https://core.test-lp.bbcincorp.com/api/onboarding/customer`, data, {
        headers: {
          'captcha-response': token
        }
      }).then(response => {
        reset();
        clearErrors();
        if (response.data.state) {
          var _response$data;
          let myData = {
            first_name: data.first_name,
            email: data.email,
            country_id: data.country_id,
            phone_number: data.phone_number,
            phone_country_id: data.phone_country_id,
            signature: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data
          };
          let lastest_order_code = {};
          if (queryCountryId) {
            myData = {
              ...myData,
              company_country_id: queryCountryId
            };
          }
          if (queryCompanyName) {
            myData = {
              ...myData,
              company_name: queryCompanyName
            };
          }
          if (queryEntityTypeId && queryPackageId) {
            myData = {
              ...myData,
              entity_type_id: queryEntityTypeId,
              package_id: queryPackageId
            };
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
      }).catch(error => {
        clearErrors();
        FormSwal.fire({
          icon: 'error',
          title: 'Send error',
          text: error
        });
      });
    }
  };
  useEffect(() => {
    axios.get(`https://core.test-lp.bbcincorp.com/api/onboarding/country/cooperative`).then(result => {
      var _result$data, _result$data2;
      let phoneList = result === null || result === void 0 ? void 0 : (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.data.map(item => ({
        ...item,
        label: item.country_code + ' +' + item.phone_code,
        value: item.id
      }));
      setPhoneCodeList(phoneList);
      let countryList = result === null || result === void 0 ? void 0 : (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.data.map(item => ({
        ...item,
        label: item.name,
        value: item.id
      }));
      setCountryList(countryList);
    });
  }, []);
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('customer'));
    if (data && data !== null && data !== void 0 && data.country_id && data !== null && data !== void 0 && data.phone_country_id) {
      setValue('first_name', data.first_name);
      setValue('email', data.email);
      setValue('phone_number', data.phone_number);
      setCustomerCountry(data.country_id);
      setPhoneCountry(data.phone_country_id);
    } else {
      axios.get(`https://core.test-lp.bbcincorp.com/api/helper/geoLooking`).then(result => {
        var _result$data3, _result$data3$data, _result$data4, _result$data4$data;
        setPhoneCountry(result === null || result === void 0 ? void 0 : (_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : (_result$data3$data = _result$data3.data) === null || _result$data3$data === void 0 ? void 0 : _result$data3$data.id);
        setCustomerCountry(result === null || result === void 0 ? void 0 : (_result$data4 = result.data) === null || _result$data4 === void 0 ? void 0 : (_result$data4$data = _result$data4.data) === null || _result$data4$data === void 0 ? void 0 : _result$data4$data.id);
      });
    }
  }, []);
  useEffect(() => {
    if (window.location && !_.isEmpty(window.location.search)) {
      window.localStorage.removeItem('data_onboarding');
    }
  }, []);
  useEffect(() => {
    let promotion_code = JSON.parse(window.localStorage.getItem('promotion_code'));
    if (promotion_code) {
      window.localStorage.removeItem('promotion_code');
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: styles.RegisterScreen
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.space_top,
    style: {
      height: '50px',
      marginBottom: `40px`
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: styles.title
  }, "Ready to start your company in just a few steps"), /*#__PURE__*/React.createElement("div", {
    className: styles.Body
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.RegisterText
  }, "Please share a bit about yourself to stay connected. All information will be kept confidential and subject to our Privacy Policy."), isTypeChristmas && /*#__PURE__*/React.createElement("div", {
    className: styles.discountChristmas
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-discount"
  }, /*#__PURE__*/React.createElement("div", {
    className: "number-discount"
  }, /*#__PURE__*/React.createElement("p", {
    className: "number"
  }, "5", /*#__PURE__*/React.createElement("span", null, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "box-content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title-discount"
  }, "Discount is here"), /*#__PURE__*/React.createElement("p", {
    className: "des-discount"
  }, "Start your company with us!")))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    className: styles.RegisterForm
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.formControl
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.inputWrapper
  }, /*#__PURE__*/React.createElement("input", Object.assign({
    type: "text",
    className: styles.RegisterInput,
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
  }))), (errors === null || errors === void 0 ? void 0 : errors.first_name) && /*#__PURE__*/React.createElement("span", {
    className: styles.ErrorMessage
  }, errors === null || errors === void 0 ? void 0 : (_errors$first_name = errors.first_name) === null || _errors$first_name === void 0 ? void 0 : _errors$first_name.message)), /*#__PURE__*/React.createElement("div", {
    className: styles.SelectWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.CountrySelectWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.nationalitySelect
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.nationalityLabel
  }, "Nationality"), /*#__PURE__*/React.createElement(SelectSearchInside, {
    value: countryList && countryList.find(item => item.value == customerCountry),
    selectBorder: true,
    dropdown_container: styles.dropdown_container,
    options: countryList,
    toggleClass: `${styles.CountrySelect} ${styles.CheckBox}`,
    onChange: handleChangeCountry,
    menuClass: styles.Menu
  }))))), /*#__PURE__*/React.createElement("div", {
    className: styles.formControl
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.inputWrapper
  }, /*#__PURE__*/React.createElement("input", Object.assign({
    type: "email",
    className: styles.RegisterInput,
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
  }))), (errors === null || errors === void 0 ? void 0 : errors.email) && /*#__PURE__*/React.createElement("span", {
    className: styles.ErrorMessage
  }, errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message)), /*#__PURE__*/React.createElement("div", {
    className: styles.SelectWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.phonenumber_container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.CustomSelect
  }, /*#__PURE__*/React.createElement(SelectSearchInside, {
    value: phoneCodeList && phoneCodeList.find(item => item.value == phoneCountry),
    options: phoneCodeList,
    toggleClass: styles.PhoneSelect,
    menuClass: `mt-2 ${styles.Menu}`,
    onChange: handleChangePhoneCountry
  })), /*#__PURE__*/React.createElement("input", Object.assign({
    type: "text",
    placeholder: "Phone number"
  }, register('phone_number'), {
    onKeyPress: event => {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    },
    className: `${styles.RegisterInput} ${styles.PhoneInput}`
  }))))), /*#__PURE__*/React.createElement("div", {
    className: styles.RegisterText
  }, /*#__PURE__*/React.createElement("input", Object.assign({
    id: "register_checkbox",
    type: "checkbox",
    style: {
      userSelect: 'none',
      cursor: `pointer`
    },
    className: `rounded ${styles.CheckBox}`
  }, register('register_checkbox'))), /*#__PURE__*/React.createElement("label", {
    htmlFor: "register_checkbox",
    style: {
      marginLeft: `10px`,
      cursor: `pointer`
    }
  }, "Sign up to BBCIncorp's mailing list for latest news and exclusive offers.")), /*#__PURE__*/React.createElement(ReCAPTCHA, {
    ref: recaptchaRef,
    sitekey: "6LeJZ68UAAAAAJZ8jxdgylEXeWL8P9Ckv7CLtE6t",
    badge: "bottomright",
    size: "invisible",
    className: "d-flex justify-content-center justify-content-xl-start"
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.FormFooter
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: `${styles.RegisterButton} ${styles.Button}`,
    disabled: isSubmitting
  }, isSubmitting ? /*#__PURE__*/React.createElement("span", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mr-2"
  }, "Loading"), /*#__PURE__*/React.createElement(Spinner, {
    as: "span",
    animation: "border",
    role: "status",
    "aria-hidden": "true",
    size: "sm"
  })) : 'Start my business'), /*#__PURE__*/React.createElement("a", {
    style: {
      fontWeight: `600`
    },
    className: `${styles.RegisterLink} ${styles.Link}`,
    href: "https://test-dashboard.bbcincorp.com/auth/login"
  }, "Already have an account?"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      width: `100%`,
      display: `flex`,
      marginTop: `1.5rem`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.trustpilot_wrapper
  }, /*#__PURE__*/React.createElement(Trustpilot, {
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

function Register({
  isTypeChristmas
}) {
  const [fatfScreen, setFatfScreen] = useState(true);
  const onReceiveData = value => {
    setFatfScreen(value);
  };
  const receiveData = () => {
    setFatfScreen(false);
    onReceiveData(false);
    localStorage.setItem('setExpirationDateObd', new Date().getTime());
  };
  useEffect(() => {
    let hours = 24;
    let now = new Date().getTime();
    let expirationDateObd = localStorage.getItem('setExpirationDateObd');
    if (expirationDateObd !== null && now - expirationDateObd < hours * 60 * 60 * 1000) {
      setFatfScreen(false);
      onReceiveData(false);
    } else {
      localStorage.removeItem('setExpirationDateObd');
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Register
  }, fatfScreen ? /*#__PURE__*/React.createElement(FatfScreen, {
    onReceiveData: receiveData
  }) : /*#__PURE__*/React.createElement(RegisterScreen, {
    trustpilot: data.trust_pilot,
    isTypeChristmas: isTypeChristmas
  }));
}

var styles$2 = {"select_title":"_styles-module__select_title__2K9oK","descriptionText":"_styles-module__descriptionText__39yY1","btn_back_top":"_styles-module__btn_back_top__1Wixw","btn_back_bottom":"_styles-module__btn_back_bottom__15HAn","selecttype_container":"_styles-module__selecttype_container__1Rr4C","select_type":"_styles-module__select_type__22Dgm","Package":"_styles-module__Package__1diqG","Package_title":"_styles-module__Package_title__2CKOy","SelectServiceScreen":"_styles-module__SelectServiceScreen__2YoN5","Link":"_styles-module__Link__2qWh0","promotion":"_styles-module__promotion__3HJX6","arrow_circle":"_styles-module__arrow_circle__3e_eN","Header":"_styles-module__Header__BIlvy","Body":"_styles-module__Body__iHyQI"};

function SelectService(params) {
  const [promotion, setPromotion] = useState(false);
  const getUrlVars = () => {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  };
  const querySignature = getUrlVars()['signature'];
  const queryPromotionCode = getUrlVars()['promotion_code'];
  const handleClick = type => {
    window.localStorage.setItem('layout', JSON.stringify({
      type: type
    }));
    if (type === 'incorporation') {
      let data = JSON.parse(window.localStorage.getItem('customer'));
      window.localStorage.setItem('customer', JSON.stringify({
        ...data,
        promotion_code: queryPromotionCode
      }));
    } else {
      var _customer$signature;
      let customer = JSON.parse(window.localStorage.getItem('customer'));
      if (customer !== null && customer !== void 0 && (_customer$signature = customer.signature) !== null && _customer$signature !== void 0 && _customer$signature.signature) {
        var _customer$signature2;
        axios.put(`https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${customer === null || customer === void 0 ? void 0 : (_customer$signature2 = customer.signature) === null || _customer$signature2 === void 0 ? void 0 : _customer$signature2.signature}`, {
          contact_from_id: 48
        });
      }
    }
  };
  useEffect(() => {
    let data_onboarding = JSON.parse(window.localStorage.getItem('data_onboarding'));
    if (window.location) {
      let data_customer = JSON.parse(window.localStorage.getItem('customer'));
      if (data_customer && data_customer.promotion_code) {
        delete data_customer.promotion_code;
        window.localStorage.setItem('customer', JSON.stringify(data_customer));
      }
      if (querySignature && queryPromotionCode) {
        axios.get(`https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${window.location.search.signature}`).then(response => {
          var _response$data, _response$data$data, _response$data2, _response$data2$data, _response$data3, _response$data3$data;
          let myData = {
            first_name: (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$data = _response$data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data.first_name) || '',
            email: (response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$data = _response$data2.data) === null || _response$data2$data === void 0 ? void 0 : _response$data2$data.email) || '',
            signature: {
              signature: response === null || response === void 0 ? void 0 : (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : (_response$data3$data = _response$data3.data) === null || _response$data3$data === void 0 ? void 0 : _response$data3$data.signature
            }
          };
          window.localStorage.setItem('customer', JSON.stringify(myData));
          window.localStorage.setItem('data_onboarding', JSON.stringify({
            incorporation: null,
            banking: null
          }));
          setPromotion(true);
        }).catch(error => console.log(error));
      } else {
        if (!data_onboarding) {
          window.location.href = '/register';
        }
      }
    }
  }, [querySignature, queryPromotionCode]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: styles$2.SelectServiceScreen
  }, /*#__PURE__*/React.createElement("a", {
    href: "/register",
    className: `${styles$2.Link} ${styles$2.Header} ${styles$2.btn_back_top}`
  }, "Back"), /*#__PURE__*/React.createElement("h2", {
    className: styles$2.select_title
  }, "Select service you want to proceed"), /*#__PURE__*/React.createElement("div", {
    className: styles$2.Body
  }, /*#__PURE__*/React.createElement("p", {
    className: styles$2.descriptionText
  }, "Incorporation packages already entail banking option. Should you need banking support only, kindly select Banking."), /*#__PURE__*/React.createElement("div", {
    className: styles$2.selecttype_container,
    style: {
      marginLeft: '-23px',
      marginRight: '-23px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.select_type
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      border: `none`,
      textDecoration: `none`
    },
    href: "/incorporation-country"
  }, /*#__PURE__*/React.createElement("button", {
    className: styles$2.Package,
    style: {
      cursor: `pointer`,
      boxShadow: '0 2px 8px rgb(201 201 201 / 25%)',
      width: `100%`
    },
    onClick: () => handleClick('incorporation')
  }, promotion && /*#__PURE__*/React.createElement("div", {
    className: styles$2.promotion
  }, "-5%"), /*#__PURE__*/React.createElement("img", {
    src: incorpImg,
    alt: "incorporation"
  }), /*#__PURE__*/React.createElement("h3", null, "INCORPORATION"), /*#__PURE__*/React.createElement("p", {
    className: styles$2.arrow_circle
  }, '\u2192')))), /*#__PURE__*/React.createElement("div", {
    className: styles$2.select_type
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      position: `relative`,
      textDecoration: `none`
    },
    href: "/banking-package"
  }, /*#__PURE__*/React.createElement("button", {
    className: styles$2.Package,
    style: {
      cursor: `pointer`,
      boxShadow: '0 2px 8px rgb(201 201 201 / 25%)',
      width: `100%`
    },
    onClick: () => handleClick('banking')
  }, /*#__PURE__*/React.createElement("img", {
    src: bankingImg,
    alt: "banking"
  }), /*#__PURE__*/React.createElement("h3", null, "BANKING"), /*#__PURE__*/React.createElement("p", {
    className: styles$2.arrow_circle
  }, '\u2192'))))))), /*#__PURE__*/React.createElement("a", {
    href: "/register",
    className: `${styles$2.Link} ${styles$2.btn_back_bottom}`
  }, "Back"));
}

var style = {"featuresTable":"_styles-module__featuresTable__RLphK","tableColumn":"_styles-module__tableColumn__10sZ0","tableColumnTitle":"_styles-module__tableColumnTitle__AUegg","tableColumnItem":"_styles-module__tableColumnItem__qvn8_","tableColumn_cur":"_styles-module__tableColumn_cur__yyHcR","tableColumnCountry":"_styles-module__tableColumnCountry__32w8z","selectFilter":"_styles-module__selectFilter__2Wejd","tableColumnTax":"_styles-module__tableColumnTax__20J5S","commonTag":"_styles-module__commonTag__uD5xU","tag":"_styles-module__tag__5r1Aj","btnClearAll":"_styles-module__btnClearAll__20yrn","btnCompare":"_styles-module__btnCompare__2GrPb","btnTalkto":"_styles-module__btnTalkto__jCdVc","dropdownBtn":"_styles-module__dropdownBtn__v22dK","dropdown_rangeSlider":"_styles-module__dropdown_rangeSlider__1BZTI","dropdown_menu":"_styles-module__dropdown_menu__YI60L","multiSelectCustom":"_styles-module__multiSelectCustom__3lMgY","commonUsed_Filter":"_styles-module__commonUsed_Filter__s0T05","common_Container":"_styles-module__common_Container__19GeQ","common_Button":"_styles-module__common_Button__3Tera","common_FilterContainer":"_styles-module__common_FilterContainer__2MQvj","common_ColumnSpacing":"_styles-module__common_ColumnSpacing__2Osel","common_Column":"_styles-module__common_Column__1Mg92","common_Tag":"_styles-module__common_Tag__3p2Gk","common_FilterMenu":"_styles-module__common_FilterMenu__5JuuW","features_Menu":"_styles-module__features_Menu__33Rw4","common_Clickable":"_styles-module__common_Clickable__1KL3B","common_UnClickable":"_styles-module__common_UnClickable__38yu2","common_LevelTop":"_styles-module__common_LevelTop__3o1V9","feature_ItemActive":"_styles-module__feature_ItemActive__GTqJ-","custom_menuDropdown":"_styles-module__custom_menuDropdown__2GFGL","titleDefault":"_styles-module__titleDefault__1sZVx","titleMobile":"_styles-module__titleMobile__w4CCu","chooseFeatures_FilterContainerMobile":"_styles-module__chooseFeatures_FilterContainerMobile__39Gjj"};

const Menu = props => {
  const style = {
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: `rgba(131, 131, 131, 0.2) 12px 14px 15px`,
    marginTop: '35px',
    position: 'absolute',
    width: '100%',
    minWidth: '180px',
    zIndex: 2
  };
  if (props.rightAligned) {
    style.right = 0;
  }
  return /*#__PURE__*/React.createElement("div", Object.assign({
    style: style
  }, props));
};
function MultiSelectDropdown({
  children,
  isOpen,
  target,
  onClose,
  rightAligned
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: style.multiSelectCustom
  }, target, isOpen ? /*#__PURE__*/React.createElement(Menu, null, children) : null, isOpen ? /*#__PURE__*/React.createElement(Blanket, {
    onClick: onClose
  }) : null);
}

const Menu$1 = props => {
  const style = {
    color: '#333!important',
    backgroundColor: 'white',
    boxShadow: '12px 14px 15px rgb(131 131 131 / 20%)',
    marginTop: '38px',
    position: 'absolute',
    width: '100%',
    zIndex: 2
  };
  if (props.rightAligned) {
    style.right = 0;
  }
  return /*#__PURE__*/React.createElement("div", Object.assign({
    style: style
  }, props));
};
function CommonDropdown({
  isOpen,
  target,
  onClose,
  options,
  value,
  onChange
}) {
  const updateData = item => {
    if (value && Array.isArray(value) && item.clickable) {
      if (item.id === 0) {
        if (value.every(temp => temp.id !== 0)) {
          onChange([...options]);
        } else {
          onChange([]);
        }
      } else {
        if (value.some(temp => temp.id === item.id) && value.length < options.length) {
          onChange(value.filter(temp => temp.id !== item.id));
        } else if (value.every(temp => temp.id !== item.id) && value.length === options.length - 2) {
          onChange([...options]);
        } else if (value.some(temp => temp.id === item.id) && value.length === options.length) {
          onChange(value.filter(temp => temp.id !== item.id && temp.id !== 0));
        } else {
          onChange([...value, item]);
        }
      }
    }
  };
  const isActive = item => {
    if (value && Array.isArray(value)) {
      return value.some(temp => temp.id === item.id && item.clickable);
    }
    return false;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: style.multiSelectCustom
  }, target, isOpen ? /*#__PURE__*/React.createElement(Menu$1, null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyleType: 'none',
      padding: '0'
    },
    className: ` ${style.common_FilterMenu}`
  }, options.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    onClick: () => updateData(item),
    style: {
      position: 'relative'
    },
    className: `${item.clickable ? style.common_Clickable : style.common_UnClickable}${item.level === 0 ? ' ' + style.common_LevelTop : ''}`
  }, item.label, isActive(item) ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(FaCheck, {
    size: 12,
    color: "#10C400"
  })) : /*#__PURE__*/React.createElement("div", null))))) : null, isOpen ? /*#__PURE__*/React.createElement(Blanket, {
    onClick: onClose
  }) : null);
}

const Menu$2 = props => {
  const style = {
    backgroundColor: 'white',
    boxShadow: '12px 14px 15px rgb(131 131 131 / 20%)',
    marginTop: '38px',
    position: 'absolute',
    width: '100%',
    zIndex: 2
  };
  if (props.rightAligned) {
    style.right = 0;
  }
  return /*#__PURE__*/React.createElement("div", Object.assign({
    style: style
  }, props));
};
function FeatureDropdown({
  isOpen,
  target,
  onClose,
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: style.multiSelectCustom
  }, target, isOpen ? /*#__PURE__*/React.createElement(Menu$2, null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyleType: 'none'
    },
    className: `${style.features_Menu}`
  }, options.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    onClick: () => {
      onChange(item.id);
      onClose();
    },
    style: {
      position: 'relative'
    },
    className: `${item.id === value ? ' ' + style.feature_ItemActive : ''}`
  }, item.label)))) : null, isOpen ? /*#__PURE__*/React.createElement(Blanket, {
    onClick: onClose
  }) : null);
}

function RangeSlider({
  values,
  setValues
}) {
  const STEP = 1;
  const MIN = 0;
  const MAX = 33;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Range, {
    values: values,
    step: STEP,
    min: MIN,
    max: MAX,
    onChange: values => {
      setValues(values);
    },
    renderTrack: ({
      props,
      children
    }) => /*#__PURE__*/React.createElement("div", {
      onMouseDown: props.onMouseDown,
      onTouchStart: props.onTouchStart,
      style: {
        ...props.style,
        height: '3px',
        display: 'flex',
        width: '100%',
        marginTop: '30px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: props.ref,
      style: {
        height: '3px',
        width: '100%',
        background: getTrackBackground({
          values,
          colors: ['#e7e7e7', '#92c1f9', '#e7e7e7'],
          min: MIN,
          max: MAX
        }),
        alignSelf: 'center',
        boxShadow: 'inset 0 1px 1px #f0f0f0'
      }
    }, children)),
    renderThumb: ({
      props,
      isDragged
    }) => /*#__PURE__*/React.createElement("div", Object.assign({}, props, {
      style: {
        ...props.style,
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: '#FFF',
        border: '1px solid #ddd'
      }
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center",
    style: {
      marginTop: '10px',
      marginBottom: '7px',
      textAlign: 'center'
    },
    id: "output"
  }, values[0], "% - ", values[1], "%"));
}

const generalFilter = (values, arrFilter, arrData) => {
  let temp = [...values];
  if (values.length > 0) {
    if (values.some(temp => temp.id === 0) && arrFilter.every(temp => temp.id !== 0) || values.every(temp => temp.id !== 0) && values.length === arrData.length - 1 && arrFilter.length < arrData.length) {
      temp = [...arrData];
    } else {
      if (values.every(temp => temp.id !== 0) && values.length === arrData.length - 1 && arrFilter.length === arrData.length) {
        temp = [];
      } else {
        temp = values.filter(item => item.id !== 0);
      }
    }
  }
  return temp;
};
const features = [{
  id: 1,
  label: 'Public Register'
}, {
  id: 2,
  label: 'Corporate Income Tax'
}, {
  id: 3,
  label: 'Tax Exemption'
}, {
  id: 4,
  label: 'EU List'
}, {
  id: 5,
  label: 'Audited Accounts'
}];
function JurisdictionFeatures(props) {
  const {
    data,
    countries,
    publicRegister,
    euList,
    commonUsedList,
    auditList,
    exemptionList
  } = props;
  const [dataFiltered, setDataFiltered] = useState(data || []);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredPublicRegisters, setFilteredPublicRegisters] = useState([]);
  const [filteredEUs, setFilteredEUs] = useState([]);
  const [filteredAuditedAccounts, setFilteredAuditedAccounts] = useState([]);
  const [filteredExemptions, setFilteredExemptions] = useState([]);
  const [corporateIncomeTax, setCorporateIncomeTax] = useState([0, 33]);
  const [filteredCommonUsed, setFilteredCommonUsed] = useState([]);
  const [currentFeatureId, setCurrentFeatureId] = useState(1);
  const getCommonTagItem = item => {
    return commonUsedList.find(temp => temp.id === item) || {};
  };
  const getCountry = id => {
    return countries.find(temp => temp.id === id) || {};
  };
  const filterByCountries = values => {
    const countriesTemp = generalFilter(values, filteredCountries, countries);
    setFilteredCountries(countriesTemp);
  };
  const filterByPublicRegister = values => {
    const prTemp = generalFilter(values, filteredPublicRegisters, publicRegister);
    setFilteredPublicRegisters(prTemp);
  };
  const filterByExemptions = values => {
    const exemptionTemp = generalFilter(values, filteredExemptions, exemptionList);
    setFilteredExemptions(exemptionTemp);
  };
  const filterByEUs = values => {
    const euTemp = generalFilter(values, filteredEUs, euList);
    setFilteredEUs(euTemp);
  };
  const filterByAuditedAccounts = values => {
    const auditTemp = generalFilter(values, filteredAuditedAccounts, auditList);
    setFilteredAuditedAccounts(auditTemp);
  };
  const clearAllFilter = () => {
    setFilteredCountries([]);
    setFilteredPublicRegisters([]);
    setFilteredExemptions([]);
    setFilteredEUs([]);
    setFilteredAuditedAccounts([]);
    setCorporateIncomeTax([0, 33]);
    setFilteredCommonUsed([]);
  };
  useEffect(() => {
    let newData = [...data];
    if (filteredCommonUsed.length > 0) {
      newData = newData.filter(item => item.commonly_used_ids.some(temp => filteredCommonUsed.some(temp2 => temp2.id === temp)));
    }
    if (filteredCountries.length > 0) {
      newData = newData.filter(item => filteredCountries.some(temp => temp.id === item.id));
    }
    if (filteredPublicRegisters.length > 0) {
      newData = newData.filter(item => filteredPublicRegisters.some(temp => temp.id === item.public_register_id));
    }
    if (filteredExemptions.length > 0) {
      newData = newData.filter(item => filteredExemptions.some(temp => temp.id === item.offshore_exemption_id));
    }
    if (filteredEUs.length > 0) {
      newData = newData.filter(item => filteredEUs.some(temp => temp.id === item.eu_id));
    }
    if (filteredAuditedAccounts.length > 0) {
      newData = newData.filter(item => filteredAuditedAccounts.some(temp => temp.id === item.audited_account_id));
    }
    newData = newData.filter(item => {
      const condition1 = item.corporate_tax_value[0] >= corporateIncomeTax[0] && item.corporate_tax_value[0] <= corporateIncomeTax[1];
      const condition2 = item.corporate_tax_value[1] >= corporateIncomeTax[0] && item.corporate_tax_value[1] <= corporateIncomeTax[1];
      return condition1 && condition2;
    });
    setDataFiltered(newData);
  }, [filteredCountries, filteredPublicRegisters, filteredEUs, filteredAuditedAccounts, filteredExemptions, corporateIncomeTax, filteredCommonUsed]);
  const CommonTag = value => {
    switch (value) {
      case 'International trading':
        return {
          color: '#00468E',
          backgroundColor: '#E6F7FF'
        };
      case 'Consulting business':
        return {
          color: '#94001B',
          backgroundColor: '#FEE2E2'
        };
      case 'Personal trading':
        return {
          color: '#FD6E06',
          backgroundColor: '#FFEADB'
        };
      case 'Holding company':
        return {
          color: '#0C2799',
          backgroundColor: '#DFEEF4'
        };
      case 'Investment company':
        return {
          color: '#075E00',
          backgroundColor: '#E7FEE9'
        };
      case 'Wealth management':
        return {
          color: '#4F00B5',
          backgroundColor: '#EBE1FF'
        };
      case 'Private trust company':
        return {
          color: '#951771',
          backgroundColor: '#F4E6FE'
        };
      case 'Brokerage company':
        return {
          color: '#00555A',
          backgroundColor: '#D0DFCE'
        };
      case 'Startups':
        return {
          color: '#00A9CE',
          backgroundColor: '#D6F9FE'
        };
      case 'Tax treaties':
        return {
          color: '#000000',
          backgroundColor: '#EFEFEF'
        };
      case 'IP holding company':
        return {
          color: '#000000',
          backgroundColor: '#E0E0E0'
        };
      case 'China/Asian market entry':
        return {
          color: '#8E0768',
          backgroundColor: '#F9EEFF'
        };
      case 'Ecommerce':
        return {
          color: '#E8B400',
          backgroundColor: '#FEFAE2'
        };
      case 'Merchant account':
        return {
          color: '#FF0000',
          backgroundColor: '#FFD7D7'
        };
      case 'Financial service company':
        return {
          color: '#2900CE',
          backgroundColor: '#EAEBFF'
        };
      case 'Yacht ownership':
        return {
          color: '#0587B0',
          backgroundColor: '#F2FEFF'
        };
      case 'EU market entry':
        return {
          color: '#8E0768',
          backgroundColor: '#F6E1FD'
        };
      case 'Asset protection':
        return {
          color: '#C39700',
          backgroundColor: '#FDF5CA'
        };
      default:
        return {
          color: '#000',
          backgroundColor: '#fff'
        };
    }
  };
  const renderCommonUsedFilter = () => /*#__PURE__*/React.createElement("div", {
    className: style.commonUsed_Filter
  }, /*#__PURE__*/React.createElement("div", {
    className: style.common_Container
  }, /*#__PURE__*/React.createElement("div", {
    className: style.common_Button
  }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    hideSearch: true,
    options: commonUsedList,
    placeholderButtonLabel: "Commonly used for",
    getDropdownButtonLabel: ({
      placeholderButtonLabel,
      value
    }) => placeholderButtonLabel,
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(DropdownButton, Object.assign({}, props, {
        iconAfter: /*#__PURE__*/React.createElement(FiFilter, {
          size: 13,
          color: "#333"
        })
      })),
      Dropdown: props => /*#__PURE__*/React.createElement(CommonDropdown, Object.assign({}, props, {
        options: commonUsedList,
        value: filteredCommonUsed,
        onChange: setFilteredCommonUsed
      }))
    }
  }))));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '4px',
      marginTop: '24px',
      color: '#333'
    }
  }, "The following tables demonstrate 20 jurisdictions with key elements to take into account when establishing your overseas business"), /*#__PURE__*/React.createElement("button", {
    onClick: clearAllFilter,
    className: `${style.btnClearAll}`
  }, "Clear all filter"), /*#__PURE__*/React.createElement("div", {
    className: style.common_FilterContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: style.common_Column
  }, renderCommonUsedFilter()), /*#__PURE__*/React.createElement("div", {
    className: `${style.common_Column} ${filteredCommonUsed.length > 0 ? ' ' + style.common_ColumnSpacing : ''}`
  }, filteredCommonUsed.filter(item => item.id !== 0).map((item, index) => {
    const tag = CommonTag(item.label);
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: `${style.common_Tag}`,
      style: {
        backgroundColor: tag.backgroundColor,
        color: tag.color
      }
    }, /*#__PURE__*/React.createElement("span", null, item.label), /*#__PURE__*/React.createElement(FaTimes, {
      style: {
        color: '#ff756e',
        cursor: 'pointer',
        marginLeft: '8px',
        marginRight: '4px'
      },
      size: 15,
      onClick: () => {
        setFilteredCommonUsed(filteredCommonUsed.filter(common => common.id !== item.id));
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: style.chooseFeatures_FilterContainerMobile
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: style.common_Button
  }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    classNamePrefix: "filter",
    hideSearch: true,
    options: commonUsedList,
    placeholderButtonLabel: "Choose Jurisdiction's Features",
    getDropdownButtonLabel: ({
      placeholderButtonLabel,
      value
    }) => placeholderButtonLabel,
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(DropdownButton, Object.assign({}, props, {
        iconAfter: /*#__PURE__*/React.createElement(FaAngleDoubleDown, {
          size: 16,
          color: "#333"
        })
      })),
      Dropdown: props => /*#__PURE__*/React.createElement(FeatureDropdown, Object.assign({}, props, {
        options: features,
        value: currentFeatureId,
        onChange: setCurrentFeatureId
      }))
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '40px'
    },
    className: `${style.featuresTable}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumn} ${style.tableColumnCountry}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'bold'
    },
    className: `${style.tableColumnTitle}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.selectFilter} table-select`
  }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    classNamePrefix: "filter",
    hideSearch: true,
    options: countries,
    placeholderButtonLabel: "Countries",
    getDropdownButtonLabel: ({
      placeholderButtonLabel,
      value
    }) => placeholderButtonLabel,
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(DropdownButton, Object.assign({}, props, {
        iconAfter: /*#__PURE__*/React.createElement(FiFilter, {
          size: 14,
          color: "#FFF"
        })
      })),
      Dropdown: MultiSelectDropdown
    },
    value: filteredCountries,
    onChange: filterByCountries
  }))), dataFiltered.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    style: {
      justifyContent: 'space-between'
    },
    className: `${style.tableColumnItem}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-2 rounded-circle overflow-hidden embed-responsive embed-responsive-16by9",
    style: {
      width: 20,
      height: 20,
      marginRight: '8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    loading: "eager",
    width: 20,
    height: 20,
    src: `https://test-site.bbcincorp.com/onboarding/custom-public/flags/4x3/${getCountry(item.id).flag}.svg`,
    alt: "flag",
    className: "embed-responsive-item",
    style: {
      objectFit: 'cover',
      borderRadius: '50%'
    }
  })), parser(item.name)), /*#__PURE__*/React.createElement("div", {
    className: "tooltip-bottom",
    style: {
      color: '#BDBDBD'
    }
  }, /*#__PURE__*/React.createElement(FaInfoCircle, {
    className: "svg-inline--fa fa-w-16"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tooltip-content"
  }, item.commonly_used_ids.map((i, index) => {
    const tagObject = getCommonTagItem(i);
    return /*#__PURE__*/React.createElement("span", {
      key: index,
      className: `${style.tag} ${style.commonTag}`,
      style: CommonTag(tagObject.label)
    }, tagObject.label);
  })))))), /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumn} ${currentFeatureId === 1 ? '' : style.tableColumn_cur} d-lg-block`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumnTitle}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.selectFilter} table-select`
  }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    classNamePrefix: "filter",
    hideSearch: true,
    options: publicRegister,
    placeholderButtonLabel: "Public register",
    getDropdownButtonLabel: ({
      placeholderButtonLabel,
      value
    }) => placeholderButtonLabel,
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(DropdownButton, Object.assign({}, props, {
        iconAfter: /*#__PURE__*/React.createElement(FiFilter, {
          size: 14,
          color: "#FFF"
        })
      })),
      Dropdown: MultiSelectDropdown
    },
    value: filteredPublicRegisters,
    onChange: filterByPublicRegister
  }))), dataFiltered.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: style.tableColumnItem
  }, item.public_register === true ? /*#__PURE__*/React.createElement(FaCheck, {
    style: {
      color: '#10C400'
    }
  }) : item.public_register === false ? /*#__PURE__*/React.createElement(FaTimes, {
    style: {
      color: '#FF0000'
    }
  }) : parser(item.public_register)))), /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumn} ${style.tableColumnTax} ${currentFeatureId === 2 ? '' : style.tableColumn_cur} d-lg-block`
  }, /*#__PURE__*/React.createElement("div", {
    className: style.tableColumnTitle
  }, /*#__PURE__*/React.createElement(Dropdown, {
    style: {
      width: `100%`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    id: "dropdown-basic",
    className: `${style.dropdown_rangeSlider} ${style.dropdownBtn}`
  }, /*#__PURE__*/React.createElement("span", {
    className: style.titleDefault
  }, "Corporate income Tax"), /*#__PURE__*/React.createElement("span", {
    className: style.titleMobile
  }, "CIA"), /*#__PURE__*/React.createElement(FiFilter, {
    size: 14,
    color: "#FFF",
    style: {
      marginLeft: '8px'
    }
  })), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    className: style.dropdown_menu
  }, /*#__PURE__*/React.createElement(Dropdown.ItemText, null, /*#__PURE__*/React.createElement(RangeSlider, {
    values: corporateIncomeTax,
    setValues: setCorporateIncomeTax
  }))))), dataFiltered.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: style.tableColumnItem
  }, item.corporate_income_tax === true ? /*#__PURE__*/React.createElement(FaCheck, {
    style: {
      color: '#10C400'
    }
  }) : item.corporate_income_tax === false ? /*#__PURE__*/React.createElement(FaTimes, {
    style: {
      color: '#FF0000'
    }
  }) : parser(item.corporate_income_tax)))), /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumn} ${currentFeatureId === 3 ? '' : style.tableColumn_cur} d-lg-block`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumnTitle}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.selectFilter} table-select`
  }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    classNamePrefix: "filter",
    hideSearch: true,
    options: exemptionList,
    placeholderButtonLabel: "Tax exemption",
    getDropdownButtonLabel: ({
      placeholderButtonLabel,
      value
    }) => placeholderButtonLabel,
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(DropdownButton, Object.assign({}, props, {
        iconAfter: /*#__PURE__*/React.createElement(FiFilter, {
          size: 14,
          color: "#FFF"
        })
      })),
      Dropdown: MultiSelectDropdown
    },
    value: filteredExemptions,
    onChange: filterByExemptions
  }))), dataFiltered.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: style.tableColumnItem
  }, item.offshore_exemption === true ? /*#__PURE__*/React.createElement(FaCheck, {
    style: {
      color: '#10C400'
    }
  }) : item.offshore_exemption === false ? /*#__PURE__*/React.createElement(FaTimes, {
    style: {
      color: '#FF0000'
    }
  }) : parser(item.offshore_exemption)))), /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumn} ${currentFeatureId === 4 ? '' : style.tableColumn_cur} d-lg-block`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumnTitle}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.selectFilter} table-select`
  }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    classNamePrefix: "filter",
    hideSearch: true,
    options: euList,
    placeholderButtonLabel: "EU list",
    getDropdownButtonLabel: ({
      placeholderButtonLabel,
      value
    }) => placeholderButtonLabel,
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(DropdownButton, Object.assign({}, props, {
        iconAfter: /*#__PURE__*/React.createElement(FiFilter, {
          size: 14,
          color: "#FFF"
        })
      })),
      Dropdown: MultiSelectDropdown
    },
    value: filteredEUs,
    onChange: filterByEUs
  }))), dataFiltered.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: style.tableColumnItem
  }, item.eu_list !== 'N/A' && /*#__PURE__*/React.createElement(FaCircle, {
    className: "svg-inline--fa fa-w-8",
    style: {
      marginRight: '8px',
      color: item.eu_list === 'Cleared' ? '#10C300' : item.eu_list === 'Greylist' ? '#706F6F' : '#000'
    },
    size: 8
  }), item.eu_list))), /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumn} ${currentFeatureId === 5 ? '' : style.tableColumn_cur} d-lg-block`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.tableColumnTitle}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${style.selectFilter} table-select`
  }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    classNamePrefix: "filter",
    hideSearch: true,
    options: auditList,
    placeholderButtonLabel: "Audited accounts",
    getDropdownButtonLabel: ({
      placeholderButtonLabel,
      value
    }) => {
      return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        className: style.titleDefault
      }, placeholderButtonLabel), /*#__PURE__*/React.createElement("span", {
        className: style.titleMobile
      }, "AA"));
    },
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(DropdownButton, Object.assign({}, props, {
        iconAfter: /*#__PURE__*/React.createElement(FiFilter, {
          size: 14,
          color: "#FFF"
        })
      })),
      Dropdown: MultiSelectDropdown
    },
    value: filteredAuditedAccounts,
    onChange: filterByAuditedAccounts
  }))), dataFiltered.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: style.tableColumnItem
  }, item.audited_accounts === true ? /*#__PURE__*/React.createElement(FaCheck, {
    style: {
      color: '#10C400'
    }
  }) : item.audited_accounts === false ? /*#__PURE__*/React.createElement(FaTimes, {
    style: {
      color: '#FF0000'
    }
  }) : parser(item.audited_accounts))))));
}

var styles$3 = {"offshoreComCompare_CompareTableContainer":"_styles-module__offshoreComCompare_CompareTableContainer__2zgJp","offshoreComCompare_CompareTable":"_styles-module__offshoreComCompare_CompareTable__2Q2vm","offshoreComCompare_ResponsiveColum1":"_styles-module__offshoreComCompare_ResponsiveColum1__3mTta","offshoreComCompare_ResponsiveColum2":"_styles-module__offshoreComCompare_ResponsiveColum2__1xhEP","offshoreComCompare_ResponsiveColum3":"_styles-module__offshoreComCompare_ResponsiveColum3__39gCE","offshoreComCompare_HeaderFeature":"_styles-module__offshoreComCompare_HeaderFeature__6y6i5","offshoreComCompare_FeatureHidden":"_styles-module__offshoreComCompare_FeatureHidden__1tyZu","offshoreComCompare_FeatureCell":"_styles-module__offshoreComCompare_FeatureCell__1VdiQ","offshoreComCompare_HeaderColumn":"_styles-module__offshoreComCompare_HeaderColumn__YXRLe","offshoreComCompare_TitleCell":"_styles-module__offshoreComCompare_TitleCell__hz01D","offshoreComCompare_SubTitleCell":"_styles-module__offshoreComCompare_SubTitleCell__3OjIl","offshoreComCompare_StructureCell":"_styles-module__offshoreComCompare_StructureCell__2_4SW","offshoreComCompare_EuValue":"_styles-module__offshoreComCompare_EuValue__2OwBC","offshoreComCompare_MenuFilter":"_styles-module__offshoreComCompare_MenuFilter__1M2wp","offshoreComCompare_ActiveOption":"_styles-module__offshoreComCompare_ActiveOption__38Cw5","offshoreComCompare_CountryElement":"_styles-module__offshoreComCompare_CountryElement__d3MjA","offshoreComCompare_CountryFlag":"_styles-module__offshoreComCompare_CountryFlag__3Rm08","offshoreComCompare_ArrowButton":"_styles-module__offshoreComCompare_ArrowButton__3yz9u","offshoreComCompare_PrevButton":"_styles-module__offshoreComCompare_PrevButton__NzmcE","offshoreComCompare_NextButton":"_styles-module__offshoreComCompare_NextButton__3_G7C"};

const Menu$3 = props => {
  const style = {
    backgroundColor: 'white',
    boxShadow: '12px 14px 15px rgb(131 131 131 / 20%)',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    position: 'absolute',
    borderRadius: 4,
    width: '100%',
    zIndex: 2,
    color: '#333'
  };
  if (props.rightAligned) {
    style.right = 0;
  }
  return /*#__PURE__*/React.createElement("div", Object.assign({
    style: style
  }, props));
};
function CountriesDropdown({
  isOpen,
  target,
  onClose,
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `${styles$3.offshoreComCompare_MenuFilter}`
  }, target, isOpen ? /*#__PURE__*/React.createElement(Menu$3, null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyleType: 'none',
      padding: 0
    }
  }, options.map((item, index) => index > 0 && /*#__PURE__*/React.createElement("li", {
    key: index,
    onClick: () => {
      onChange(item.id);
      onClose();
    },
    style: {
      position: 'relative'
    },
    className: `${value.id === item.id ? ' ' + styles$3.offshoreComCompare_ActiveOption : ''}`
  }, item.label)))) : null, isOpen ? /*#__PURE__*/React.createElement(Blanket, {
    onClick: onClose
  }) : null);
}

const CountryElement = ({
  country,
  onPress
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onPress,
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    className: ` ${styles$3.offshoreComCompare_CountryElement}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: '8px',
      overflow: 'hidden'
    },
    className: `mr-2 overflow-hidden embed-responsive embed-responsive-16by9 ${styles$3.offshoreComCompare_CountryFlag}`
  }, /*#__PURE__*/React.createElement("img", {
    loading: "eager",
    width: 20,
    height: 20,
    src: `https://test-site.bbcincorp.com/onboarding/custom-public/flags/4x3/${country.flag}.svg`,
    alt: `${country.label.toLowerCase()} flag`,
    className: "embed-responsive-item",
    style: {
      objectFit: 'cover',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("span", null, country.label), /*#__PURE__*/React.createElement(FaAngleDoubleDown, {
    size: 14,
    color: "#FFF",
    style: {
      display: 'inline',
      marginBottom: 1,
      marginLeft: 1,
      display: 'inline'
    }
  })));
};
const EuElement = ({
  eu_id
}) => {
  switch (eu_id) {
    case 1:
      return /*#__PURE__*/React.createElement("div", {
        className: styles$3.offshoreComCompare_EuValue
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          backgroundColor: '#333'
        }
      }), /*#__PURE__*/React.createElement("span", null, "Blacklist"));
    case 2:
      return /*#__PURE__*/React.createElement("div", {
        className: styles$3.offshoreComCompare_EuValue
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          backgroundColor: '#333'
        }
      }), /*#__PURE__*/React.createElement("span", null, "Greylist"));
    case 3:
      return /*#__PURE__*/React.createElement("div", {
        className: styles$3.offshoreComCompare_EuValue
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          backgroundColor: '#10C400'
        }
      }), /*#__PURE__*/React.createElement("span", null, "Cleared"));
    default:
      return /*#__PURE__*/React.createElement("div", null, "N/A");
  }
};
const OECD = ({
  array
}) => {
  let result = '';
  if (array && Array.isArray(array)) {
    array.forEach((item, index) => {
      result += index > 0 ? ', ' + item : item;
    });
  }
  return /*#__PURE__*/React.createElement("div", null, result);
};
const CellItem = ({
  data,
  showMore
}) => {
  if (showMore) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tooltip-bottom justify-content-center",
      style: {
        color: '#BDBDBD'
      }
    }, /*#__PURE__*/React.createElement(FaInfoCircle, null), /*#__PURE__*/React.createElement("div", {
      className: "tooltip-content"
    }, parser(showMore))), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        marginLeft: '8px',
        marginRight: '16px',
        textAlign: 'center'
      }
    }, parser(data)));
  } else {
    if (typeof data === 'string') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, parser(data));
    }
    if (data) {
      return /*#__PURE__*/React.createElement(FaCheck, {
        size: 14,
        color: "#10C300"
      });
    }
    return /*#__PURE__*/React.createElement(FaTimes, {
      size: 14,
      color: "#FF0000"
    });
  }
};
const getVisibleColClass = visibleCol => {
  switch (visibleCol) {
    case 1:
      return ' ' + styles$3.offshoreComCompare_ResponsiveColum2 + ' ' + styles$3.offshoreComCompare_ResponsiveColum3;
    case 2:
      return ' ' + styles$3.offshoreComCompare_ResponsiveColum1 + ' ' + styles$3.offshoreComCompare_ResponsiveColum3;
    case 3:
      return ' ' + styles$3.offshoreComCompare_ResponsiveColum1 + ' ' + styles$3.offshoreComCompare_ResponsiveColum2;
    default:
      return '';
  }
};
function JurisdictionComparison({
  data,
  countries
}) {
  const [dataColumn1, setDataColumn1] = useState(data[0] || {});
  const [dataColumn2, setDataColumn2] = useState(data[1] || {});
  const [dataColumn3, setDataColumn3] = useState(data[2] || {});
  const [mobileColVisible, setMobileColVisible] = useState(1);
  const handleNext = () => {
    if (mobileColVisible < 3) {
      setMobileColVisible(mobileColVisible + 1);
    }
  };
  const handlePrev = () => {
    if (mobileColVisible > 1) {
      setMobileColVisible(mobileColVisible - 1);
    }
  };
  const getCountry = country_id => {
    return countries.find(country => country.id === country_id);
  };
  const getColumn1ByCountry = country_id => {
    if (dataColumn1.country_id !== country_id) {
      const result = data.find(item => item.country_id === country_id);
      if (result) {
        setDataColumn1(result);
      }
    }
  };
  const getColumn2ByCountry = country_id => {
    if (dataColumn2.country_id !== country_id) {
      const result = data.find(item => item.country_id === country_id);
      if (result) {
        setDataColumn2(result);
      }
    }
  };
  const getColumn3ByCountry = country_id => {
    if (dataColumn3.country_id !== country_id) {
      const result = data.find(item => item.country_id === country_id);
      if (result) {
        setDataColumn3(result);
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_CompareTableContainer
  }, /*#__PURE__*/React.createElement("table", {
    className: styles$3.offshoreComCompare_CompareTable + getVisibleColClass(mobileColVisible)
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_HeaderFeature
  }, "Features")), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    className: `${styles$3.offshoreComCompare_HeaderColumn}`
  }, /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    hideSearch: true,
    options: [],
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(CountryElement, Object.assign({}, props, {
        country: getCountry(dataColumn1.country_id)
      })),
      Dropdown: props => /*#__PURE__*/React.createElement(CountriesDropdown, Object.assign({}, props, {
        options: countries,
        value: getCountry(dataColumn1.country_id),
        onChange: getColumn1ByCountry
      }))
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none'
    },
    className: `btn ${styles$3.offshoreComCompare_ArrowButton} ${styles$3.offshoreComCompare_NextButton}`,
    onClick: handleNext
  }, /*#__PURE__*/React.createElement(FaChevronRight, {
    size: 20,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    className: `${styles$3.offshoreComCompare_HeaderColumn}`
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none',
      background: 'transparent'
    },
    className: `btn ${styles$3.offshoreComCompare_ArrowButton} ${styles$3.offshoreComCompare_PrevButton}`,
    onClick: handlePrev
  }, /*#__PURE__*/React.createElement(FaChevronLeft, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    hideSearch: true,
    options: [],
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(CountryElement, Object.assign({}, props, {
        country: getCountry(dataColumn2.country_id)
      })),
      Dropdown: props => /*#__PURE__*/React.createElement(CountriesDropdown, Object.assign({}, props, {
        options: countries,
        value: getCountry(dataColumn2.country_id),
        onChange: getColumn2ByCountry
      }))
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none'
    },
    className: `btn ${styles$3.offshoreComCompare_ArrowButton} ${styles$3.offshoreComCompare_NextButton}`,
    onClick: handleNext
  }, /*#__PURE__*/React.createElement(FaChevronRight, {
    size: 20,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("div", {
    className: `${styles$3.offshoreComCompare_HeaderColumn}`,
    style: {
      borderTopRightRadius: 15,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none',
      background: 'transparent'
    },
    className: `btn ${styles$3.offshoreComCompare_ArrowButton} ${styles$3.offshoreComCompare_PrevButton}`,
    onClick: handlePrev
  }, /*#__PURE__*/React.createElement(FaChevronLeft, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(ReactMultiSelectCheckboxes, {
    hideSearch: true,
    options: [],
    components: {
      DropdownButton: props => /*#__PURE__*/React.createElement(CountryElement, Object.assign({}, props, {
        country: getCountry(dataColumn3.country_id)
      })),
      Dropdown: props => /*#__PURE__*/React.createElement(CountriesDropdown, Object.assign({}, props, {
        options: countries,
        value: getCountry(dataColumn3.country_id),
        onChange: getColumn3ByCountry
      }))
    }
  }))))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_TitleCell
  }, /*#__PURE__*/React.createElement("img", {
    src: internationalCompliance,
    style: {
      marginBottom: '4px'
    },
    loading: "lazy",
    width: 22,
    height: 22,
    alt: "INTERNATIONAL COMPLIANCE"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "INTERNATIONAL COMPLIANCE"))), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "EU list")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(EuElement, {
    eu_id: dataColumn1.international_compliance.eu_id
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EuElement, {
    eu_id: dataColumn2.international_compliance.eu_id
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EuElement, {
    eu_id: dataColumn3.international_compliance.eu_id
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "OECD")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(OECD, {
    array: dataColumn1.international_compliance.oecd
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OECD, {
    array: dataColumn2.international_compliance.oecd
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OECD, {
    array: dataColumn3.international_compliance.oecd
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_TitleCell
  }, /*#__PURE__*/React.createElement("img", {
    src: legalStructure,
    style: {
      marginBottom: '4px'
    },
    loading: "lazy",
    width: 22,
    height: 22,
    alt: "INTERNATIONAL COMPLIANCE"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "LEGAL STRUCTURE"))), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Legal basis")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.legal_structure.legal_basic
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.legal_structure.legal_basic
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.legal_structure.legal_basic
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Foreign exchange control")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.legal_structure.foreign_exchange_control
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.legal_structure.foreign_exchange_control
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.legal_structure.foreign_exchange_control
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Foreign ownership allowed")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.legal_structure.foreign_ownership_control
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.legal_structure.foreign_ownership_control
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.legal_structure.foreign_ownership_control
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_TitleCell
  }, /*#__PURE__*/React.createElement("img", {
    src: businessStructure,
    style: {
      marginBottom: '4px'
    },
    loading: "lazy",
    width: 22,
    height: 22,
    alt: "INTERNATIONAL COMPLIANCE"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "BUSINESS STRUCTURE"))), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_SubTitleCell
  }, "Company type")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.company_type
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.company_type
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.company_type
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_SubTitleCell
  }, "Director")), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Minimum number")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.director.minimum_number
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.director.minimum_number
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.director.minimum_number
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Local resident required")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.director.local_resident_required
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.director.local_resident_required
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.director.local_resident_required
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Public register of director")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.director.public_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.director.public_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.director.public_register
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Nominee director")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.director.nominee
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.director.nominee
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.director.nominee
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Corporate director")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.director.corporate
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.director.corporate
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.director.corporate
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_SubTitleCell
  }, "Shareholder")), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Minimum number")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.shareholder.minimum_number
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.shareholder.minimum_number
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.shareholder.minimum_number
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Local resident required")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.shareholder.local_resident_required
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.shareholder.local_resident_required
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.shareholder.local_resident_required
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Public register of shareholder")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.shareholder.public_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.shareholder.public_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.shareholder.public_register
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Nominee shareholder")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.shareholder.nominee
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.shareholder.nominee
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.shareholder.nominee
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Corporate shareholder")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.shareholder.corporate
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.shareholder.corporate
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.shareholder.corporate
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_SubTitleCell
  }, "Beneficial owner")), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Public register of beneficial owner")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.beneficial_owner.public_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.beneficial_owner.public_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.beneficial_owner.public_register
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Central register of beneficial owner")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.beneficial_owner.central_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.beneficial_owner.central_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.beneficial_owner.central_register
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_SubTitleCell
  }, "Share capital")), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Standard registered capital")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.share_capital.standard_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.share_capital.standard_register
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.share_capital.standard_register
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Min paid-up capital")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.share_capital.min_paid_up
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.share_capital.min_paid_up
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.share_capital.min_paid_up
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Capital currency")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.share_capital.capital_currency
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.share_capital.capital_currency
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.share_capital.capital_currency
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_StructureCell
  }, "Bearer shares")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.business_structure.share_capital.bearer_shares
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.business_structure.share_capital.bearer_shares
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.business_structure.share_capital.bearer_shares
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_TitleCell
  }, /*#__PURE__*/React.createElement("img", {
    src: initialRequirement,
    style: {
      marginBottom: '4px'
    },
    loading: "lazy",
    width: 22,
    height: 22,
    alt: "INTERNATIONAL COMPLIANCE"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "INITIAL REQUIREMENT"))), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Local registered address")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.initial_requirement.local_registered_address
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.initial_requirement.local_registered_address
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.initial_requirement.local_registered_address
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Company secretary")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.initial_requirement.company_secretary
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.initial_requirement.company_secretary
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.initial_requirement.company_secretary
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Local registered agent")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.initial_requirement.local_registered_agent
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.initial_requirement.local_registered_agent
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.initial_requirement.local_registered_agent
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_TitleCell
  }, /*#__PURE__*/React.createElement("img", {
    src: annualCompliance,
    style: {
      marginBottom: '4px'
    },
    loading: "lazy",
    width: 22,
    height: 22,
    alt: "INTERNATIONAL COMPLIANCE"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "ANNUAL COMPLIANCE"))), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Annual return")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.annual_compliance.annual_return
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.annual_compliance.annual_return
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.annual_compliance.annual_return
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Annual tax return")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.annual_compliance.annual_tax_return
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.annual_compliance.annual_tax_return
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.annual_compliance.annual_tax_return
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Records keeping")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.annual_compliance.records_keeping
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.annual_compliance.records_keeping
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.annual_compliance.records_keeping
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Audited accounts")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.annual_compliance.audited_accounts
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.annual_compliance.audited_accounts
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.annual_compliance.audited_accounts
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Annual general meeting")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.annual_compliance.annual_general_meeting
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.annual_compliance.annual_general_meeting
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.annual_compliance.annual_general_meeting
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Location of annual general meeting")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.annual_compliance.location_of_meeting
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.annual_compliance.location_of_meeting
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.annual_compliance.location_of_meeting
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Economic substance")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.annual_compliance.economic_substance
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.annual_compliance.economic_substance
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.annual_compliance.economic_substance
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell + ' ' + styles$3.offshoreComCompare_TitleCell
  }, /*#__PURE__*/React.createElement("img", {
    src: localTax,
    style: {
      marginBottom: '4px'
    },
    loading: "lazy",
    width: 22,
    height: 22,
    alt: "INTERNATIONAL COMPLIANCE"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "LOCAL TAX PROFILE"))), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Offshore tax exemption")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.local_tax_profile.offshore_tax_exemption,
    showMore: dataColumn1.local_tax_profile.offshore_tax_exemption_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.local_tax_profile.offshore_tax_exemption,
    showMore: dataColumn2.local_tax_profile.offshore_tax_exemption_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.local_tax_profile.offshore_tax_exemption,
    showMore: dataColumn3.local_tax_profile.offshore_tax_exemption_show_more
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Corporate income tax")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.local_tax_profile.corporate_income_tax,
    showMore: dataColumn1.local_tax_profile.corporate_income_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.local_tax_profile.corporate_income_tax,
    showMore: dataColumn2.local_tax_profile.corporate_income_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.local_tax_profile.corporate_income_tax,
    showMore: dataColumn3.local_tax_profile.corporate_income_tax_show_more
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Sales tax (VAT/Business tax/GST)")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.local_tax_profile.sales_tax,
    showMore: dataColumn1.local_tax_profile.sales_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.local_tax_profile.sales_tax,
    showMore: dataColumn2.local_tax_profile.sales_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.local_tax_profile.sales_tax,
    showMore: dataColumn3.local_tax_profile.sales_tax_show_more
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Capital gain tax")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.local_tax_profile.capital_gain_tax,
    showMore: dataColumn1.local_tax_profile.capital_gain_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.local_tax_profile.capital_gain_tax,
    showMore: dataColumn2.local_tax_profile.capital_gain_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.local_tax_profile.capital_gain_tax,
    showMore: dataColumn3.local_tax_profile.capital_gain_tax_show_more
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Dividend tax")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.local_tax_profile.dividend_tax,
    showMore: dataColumn1.local_tax_profile.dividend_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.local_tax_profile.dividend_tax,
    showMore: dataColumn2.local_tax_profile.dividend_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.local_tax_profile.dividend_tax,
    showMore: dataColumn3.local_tax_profile.dividend_tax_show_more
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Property tax")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.local_tax_profile.property_tax,
    showMore: dataColumn1.local_tax_profile.property_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.local_tax_profile.property_tax,
    showMore: dataColumn2.local_tax_profile.property_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.local_tax_profile.property_tax,
    showMore: dataColumn3.local_tax_profile.property_tax_show_more
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Withholding tax")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.local_tax_profile.withholding_tax,
    showMore: dataColumn1.local_tax_profile.withholding_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.local_tax_profile.withholding_tax,
    showMore: dataColumn2.local_tax_profile.withholding_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.local_tax_profile.withholding_tax,
    showMore: dataColumn3.local_tax_profile.withholding_tax_show_more
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureHidden
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$3.offshoreComCompare_FeatureCell
  }, "Transfer tax")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn1.local_tax_profile.transfer_tax,
    showMore: dataColumn1.local_tax_profile.transfer_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn2.local_tax_profile.transfer_tax,
    showMore: dataColumn2.local_tax_profile.transfer_tax_show_more
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellItem, {
    data: dataColumn3.local_tax_profile.transfer_tax,
    showMore: dataColumn3.local_tax_profile.transfer_tax_show_more
  })))))));
}

var countries = [
	{
		id: 0,
		label: "All",
		value: 0
	},
	{
		id: 1,
		label: "Anguilla",
		value: 1,
		flag: "ai"
	},
	{
		id: 2,
		label: "Bahamas",
		value: 2,
		flag: "bs"
	},
	{
		id: 3,
		label: "Belize",
		value: 3,
		flag: "bz"
	},
	{
		id: 4,
		label: "Panama",
		value: 4,
		flag: "pa"
	},
	{
		id: 5,
		label: "Cayman Islands",
		value: 5,
		flag: "ky"
	},
	{
		id: 6,
		label: "Saint Kitts",
		value: 6,
		flag: "kn"
	},
	{
		id: 7,
		label: "BVI",
		value: 7,
		flag: "vg"
	},
	{
		id: 8,
		label: "Saint Vincent",
		value: 8,
		flag: "vc"
	},
	{
		id: 9,
		label: "Hong Kong",
		value: 9,
		flag: "hk"
	},
	{
		id: 10,
		label: "Marshall Islands",
		value: 10,
		flag: "mh"
	},
	{
		id: 11,
		label: "Samoa",
		value: 11,
		flag: "ws"
	},
	{
		id: 12,
		label: "Singapore",
		value: 12,
		flag: "sg"
	},
	{
		id: 13,
		label: "Cyprus",
		value: 13,
		flag: "cy"
	},
	{
		id: 14,
		label: "Mauritius",
		value: 14,
		flag: "mu"
	},
	{
		id: 15,
		label: "RAK (UAE)",
		value: 15,
		flag: "ae"
	},
	{
		id: 16,
		label: "Jersey",
		value: 16,
		flag: "je"
	},
	{
		id: 17,
		label: "Seychelles",
		value: 17,
		flag: "sc"
	},
	{
		id: 18,
		label: "UK",
		value: 18,
		flag: "gb"
	},
	{
		id: 19,
		label: "Vietnam",
		value: 19,
		flag: "vn"
	},
	{
		id: 20,
		label: "Delaware",
		value: 20,
		flag: "delaware"
	}
];
var public_register = [
	{
		id: 0,
		label: "All",
		value: "all"
	},
	{
		id: 1,
		label: "Yes",
		value: "yes"
	},
	{
		id: 2,
		label: "No",
		value: "no"
	},
	{
		id: 3,
		label: "Only directors",
		value: "directors"
	},
	{
		id: 4,
		label: "Only shareholders",
		value: "shareholders"
	}
];
var offshore_exemptions = [
	{
		id: 0,
		label: "All",
		value: "all"
	},
	{
		id: 1,
		label: "Yes",
		value: "Yes"
	},
	{
		id: 2,
		label: "No",
		value: "No"
	}
];
var eu_list = [
	{
		id: 0,
		label: "All",
		value: "all"
	},
	{
		id: 1,
		label: "Blacklist",
		value: "blacklist"
	},
	{
		id: 2,
		label: "Greylist",
		value: "greylist"
	},
	{
		id: 3,
		label: "Cleared",
		value: "cleared"
	}
];
var audited_accounts = [
	{
		id: 0,
		label: "All",
		value: "all"
	},
	{
		id: 1,
		label: "Yes",
		value: "Yes"
	},
	{
		id: 2,
		label: "No",
		value: "No"
	}
];
var select_default = [
	{
		label: "All",
		value: "all"
	},
	{
		label: "Yes",
		value: "yes"
	},
	{
		label: "No",
		value: "no"
	}
];
var common_used = [
	{
		id: 0,
		label: "All",
		level: 0,
		clickable: true
	},
	{
		id: 1,
		label: "International trading",
		level: 0,
		clickable: true
	},
	{
		id: 2,
		label: "Consulting business",
		level: 0,
		clickable: true
	},
	{
		id: 3,
		label: "Trading",
		level: 0,
		clickable: false
	},
	{
		id: 4,
		label: "Personal trading",
		level: 1,
		clickable: true,
		parent_id: 3
	},
	{
		id: 5,
		label: "Brokerage company",
		level: 1,
		clickable: true,
		parent_id: 3
	},
	{
		id: 6,
		label: "Investment & holding",
		level: 0,
		clickable: false
	},
	{
		id: 7,
		label: "Holding company",
		level: 1,
		clickable: true,
		parent_id: 6
	},
	{
		id: 8,
		label: "IP holding company",
		level: 1,
		clickable: true,
		parent_id: 6
	},
	{
		id: 9,
		label: "Yacht ownership",
		level: 1,
		clickable: true,
		parent_id: 6
	},
	{
		id: 10,
		label: "Investment company",
		level: 1,
		clickable: true,
		parent_id: 6
	},
	{
		id: 11,
		label: "Financial service company",
		level: 1,
		clickable: true,
		parent_id: 6
	},
	{
		id: 12,
		label: "Financial planning",
		level: 0,
		clickable: false
	},
	{
		id: 13,
		label: "Wealth management",
		level: 1,
		clickable: true,
		parent_id: 12
	},
	{
		id: 14,
		label: "Asset protection",
		level: 1,
		clickable: true,
		parent_id: 12
	},
	{
		id: 15,
		label: "Private trust company",
		level: 1,
		clickable: true,
		parent_id: 12
	},
	{
		id: 16,
		label: "Market expansion",
		level: 0,
		clickable: false
	},
	{
		id: 17,
		label: "China/Asian market entry",
		level: 1,
		clickable: true,
		parent_id: 16
	},
	{
		id: 18,
		label: "EU market entry",
		level: 1,
		clickable: true,
		parent_id: 16
	},
	{
		id: 19,
		label: "Ecommerce",
		level: 0,
		clickable: true
	},
	{
		id: 20,
		label: "Merchant account",
		level: 0,
		clickable: true
	},
	{
		id: 21,
		label: "Tax treaties",
		level: 0,
		clickable: true
	},
	{
		id: 22,
		label: "Startups",
		level: 0,
		clickable: true
	}
];
var DataFeatures = [
	{
		id: 1,
		name: "<a target='_blank' href='/offshore/company-formation/anguilla'>Anguilla</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Holding company"
		],
		corporate_income_tax: false,
		corporate_tax_value: [
			0,
			0
		],
		offshore_exemption_id: 2,
		offshore_exemption: "N/A",
		eu_id: 2,
		eu_list: "Greylist",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 2,
		name: "<a target='_blank' href='/offshore/company-formation/bahamas'>Bahamas</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company"
		],
		corporate_income_tax: false,
		corporate_tax_value: [
			0,
			0
		],
		offshore_exemption_id: 2,
		offshore_exemption: "N/A",
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 3,
		name: "<a target='_blank' href='/offshore/company-formation/belize'>Belize</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company"
		],
		corporate_income_tax: "<span>5%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>Corporate income tax:</p><ul><li>40% on petroleum operations</li><li>1.75% : chargeable income > 3 million Belize dollars</li><li>3%: chargeable income < 3 million Belize dollars</li></ul><p>Business tax based on gross income:</p><ul><li>5% on foreign passive income</li><li>1.75% - 6% on all other foreign income</li></ul></div></span>",
		corporate_tax_value: [
			5,
			5
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 4,
		name: "<a target='_blank' href='/offshore/company-formation/panama'>Panama</a>",
		public_register_id: 3,
		public_register: "<span>Depend</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content' style='left: 10%'><p>Public register of directors, not shareholders</p></div></span>",
		public_register_value: "Public register of directors, not shareholders",
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10,
			13,
			15
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"Wealth management",
			"Private trust company"
		],
		corporate_income_tax: "<span>25%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>Greater of:</p><ul><li>25% on net taxable income; or</li><li>1.17% on gross taxable income</li></ul><p>Branch remittance tax: 10% in addition to CIT</p></div></span>",
		corporate_tax_value: [
			25,
			25
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 1,
		eu_list: "Blacklist",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 5,
		name: "<a target='_blank' href='/offshore/company-formation/cayman-islands'>Cayman Islands</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			5,
			7,
			10,
			13,
			15
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"Wealth management",
			"Private trust company",
			"Brokerage company"
		],
		corporate_income_tax: false,
		corporate_tax_value: [
			0,
			0
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 6,
		name: "<a target='_blank' href='/offshore/company-formation/saint-kitts-and-nevis'>Saint Kitts</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company"
		],
		corporate_income_tax: "<span>33%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>CIT: 33%</p><p>Branch remittance tax: 15%</p></div></span>",
		corporate_tax_value: [
			33,
			33
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 7,
		name: "<a target='_blank' href='/offshore/company-formation/bvi'>BVI</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10,
			13,
			15
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"Wealth management",
			"Private trust company"
		],
		corporate_income_tax: false,
		corporate_tax_value: [
			0,
			0
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 8,
		name: "<a target='_blank' href='/offshore/company-formation/saint-vincent'>Saint Vincent</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			5,
			7,
			10
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"Brokerage company"
		],
		corporate_income_tax: "<span>30%</span>",
		corporate_tax_value: [
			30,
			30
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 9,
		name: "<a target='_blank' href='/hk/company-incorporation'>Hong Kong</a>",
		public_register_id: 1,
		public_register: true,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			8,
			10,
			11,
			17,
			19,
			20,
			21,
			22
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"China/Asian market entry",
			"Investment company",
			"Holding company",
			"IP holding company",
			"Ecommerce",
			"Merchant account",
			"Tax treaties",
			"Startups",
			"Financial service company"
		],
		corporate_income_tax: "<span>8.25% - 16.5%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>8.25% for the first 2mil HKD</p><p>16.5% for above</p></div></span>",
		corporate_tax_value: [
			8,
			17
		],
		tax_valuea: [
			8,
			8
		],
		tax_value2: [
			17,
			17
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 1,
		audited_accounts: true
	},
	{
		id: 10,
		name: "<a target='_blank' href='/offshore/company-formation/marshall-islands'>Marshall Islands</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			9,
			10
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"Yacht ownership"
		],
		corporate_income_tax: "<span>3%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>$80 for the first $10,000</p><p>3% on the excess</p></div></span>",
		corporate_tax_value: [
			3,
			3
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 11,
		name: "<a target='_blank' href='/offshore/company-formation/samoa'>Samoa</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			7,
			10
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Holding company"
		],
		corporate_income_tax: "<span>27%</span>",
		corporate_tax_value: [
			27,
			27
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 1,
		eu_list: "Blacklist",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 12,
		name: "<a target='_blank' href='/sg/company-incorporation'>Singapore</a>",
		public_register_id: 1,
		public_register: true,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			8,
			10,
			11,
			17,
			18,
			20,
			21,
			22
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"China/Asian market entry",
			"Investment company",
			"Holding company",
			"IP holding company",
			"Ecommerce",
			"Merchant account",
			"Tax treaties",
			"Startups",
			"Financial service company"
		],
		corporate_income_tax: "<span>17%</span>",
		corporate_tax_value: [
			17,
			17
		],
		offshore_exemption_id: 1,
		offshore_exemption: "<span>Depend</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>Yes if not remitted to Singapore</p></div></span>",
		offshore_exemption_value: "Yes if not remitted to Singapore",
		eu_id: 0,
		eu_list: "N/A",
		audited_account_id: 1,
		audited_accounts: "<span>Depend</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>Yes, but audit exemption is also available</p></div></span>",
		audited_accounts_value: "Yes, but audit exemption is also available"
	},
	{
		id: 13,
		name: "<a target='_blank' href='/offshore/company-formation/cyprus'>Cyprus</a>",
		public_register_id: 1,
		public_register: true,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10,
			18,
			19,
			20,
			21
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"EU market entry",
			"IP holding company",
			"Ecommerce",
			"Merchant account",
			"Tax treaties"
		],
		corporate_income_tax: "<span>12.50%</span>",
		corporate_tax_value: [
			13,
			13
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 0,
		eu_list: "N/A",
		audited_account_id: 1,
		audited_accounts: true
	},
	{
		id: 14,
		name: "<a target='_blank' href='/offshore/company-formation/mauritius'>Mauritius</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company"
		],
		corporate_income_tax: "<span>15%</span>",
		corporate_tax_value: [
			15,
			15
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 1,
		audited_accounts: true
	},
	{
		id: 15,
		name: "<a target='_blank' href='/offshore/company-formation/rak'>RAK (UAE)</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10,
			13,
			14
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Holding company",
			"Investment company",
			"Wealth management",
			"Asset protection"
		],
		corporate_income_tax: "<span>0%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>Up to 55% for oil and gas exploration and production company</p><p>20% for branches of foreign banks</p><p>Except the above cases, No Corporate Tax in RAK.</p></div></span>",
		corporate_tax_value: [
			0,
			0
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 0,
		eu_list: "N/A",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 16,
		name: "<a target='_blank' href='/offshore/company-formation/jersey'>Jersey</a>",
		public_register_id: 1,
		public_register: true,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10,
			13
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"Wealth management"
		],
		corporate_income_tax: "<span>0%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>0% standard rate</p><p>10% or 20% to some specific activities</p></div></span>",
		corporate_tax_value: [
			0,
			0
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 17,
		name: "<a target='_blank' href='/offshore/company-formation/seychelles'>Seychelles</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			4,
			7
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Holding company"
		],
		corporate_income_tax: "<span>25% - 33%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>25% on the first SR1mil taxable income</p><p>33% applied to above amount</p></div></span>",
		corporate_tax_value: [
			25,
			33
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 2,
		eu_list: "Greylist",
		audited_account_id: 2,
		audited_accounts: false
	},
	{
		id: 18,
		name: "<a target='_blank' href='/offshore/company-formation/united-kingdom'>UK</a>",
		public_register_id: 1,
		public_register: true,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			8,
			10,
			11,
			19,
			20
		],
		commonly_used_for: [
			"International trading",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"IP holding company",
			"Ecommerce",
			"Merchant account",
			"Financial service company"
		],
		corporate_income_tax: "<span>19%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>19%</p><p>25% for the year starting from 1 April 2023</p></div></span>",
		corporate_tax_value: [
			19,
			25
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 0,
		eu_list: "N/A",
		audited_account_id: 1,
		audited_accounts: "<span>Depend</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>Yes, but audit exemption is also available</p></div></span>",
		audited_accounts_value: "Yes, but audit exemption is also available"
	},
	{
		id: 19,
		name: "<a target='_blank' href='/vn/company-registration'>Vietnam</a>",
		public_register_id: 1,
		public_register: true,
		commonly_used_ids: [
			1,
			2,
			4,
			7,
			10,
			17,
			19,
			22
		],
		commonly_used_for: [
			"Startups",
			"International trading",
			"Ecommerce",
			"Consulting business",
			"Personal trading",
			"Investment company",
			"Holding company",
			"China/Asian market entry"
		],
		corporate_income_tax: "<span>20% - 22%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>20% for annually income under 20 billion VND</p><p>22% for above</p></div></span>",
		corporate_tax_value: [
			20,
			22
		],
		offshore_exemption_id: 2,
		offshore_exemption: false,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 1,
		audited_accounts: "<span>Depend</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>Yes (applying for companies with foreign owners)</p></div></span>"
	},
	{
		id: 20,
		name: "<a target='_blank' href='/offshore/company-formation/delaware'>Delaware</a>",
		public_register_id: 2,
		public_register: false,
		commonly_used_ids: [
			1,
			2,
			11,
			19,
			21
		],
		commonly_used_for: [
			"Consulting business",
			"International trading",
			"Financial service company",
			"Ecommerce",
			"Tax treaties"
		],
		corporate_income_tax: "<span>8.7%</span><span class='tooltip-bottom'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='info-circle' class='svg-inline--fa fa-info-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#BDBDBD' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path></svg><div class='tooltip-content'><p>8.7% for Corporation</p></div></span>",
		corporate_tax_value: [
			9,
			9
		],
		offshore_exemption_id: 1,
		offshore_exemption: true,
		eu_id: 3,
		eu_list: "Cleared",
		audited_account_id: 2,
		audited_accounts: false
	}
];
var DataComparison = [
	{
		id: 1,
		country_id: 1,
		international_compliance: {
			eu_id: 2,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "IBC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "N/A",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: "N/A",
			corporate_income_tax: false,
			sales_tax: false,
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: "0.075% on annual value",
			withholding_tax: false,
			transfer_tax: "<span>Transfer of real property tax</span>",
			transfer_tax_show_more: "Transfer of real property tax: 5% or up to 12.5% with nonresidents"
		}
	},
	{
		id: 2,
		country_id: 2,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "IBC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "US$50,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: "N/A",
			corporate_income_tax: false,
			sales_tax: "12% standard rate",
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: "<span>On owner-occupied properties</span>",
			property_tax_show_more: "On owner-occupied properties:<br/><ul><li>First $250,000 - Exempt</li><li>Between $250,000 to $500,000 - 3/4 of one percent.</li><li>On the portion over $500,000, the tax rate is 1% of the market value of the property.</li></ul><br/>On vacant land (owned by non-Bahamians):<ul><li>First $7,000 of market value -$100</li><li>More than $7,000 - 2% of the market value</li></ul><br/>For commercial/other improved properties:<br/><ul><li>First $500,000 of market value - 1% of the market value;</li><li>On the portion over $500,000 - 2% of the market value.</li></ul>",
			withholding_tax: false,
			transfer_tax: false
		}
	},
	{
		id: 3,
		country_id: 3,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "IBC/LLC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "US$50,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: false,
			corporate_income_tax: "Corporate income tax<br/>Business tax based on gross income",
			corporate_income_tax_show_more: "Corporate income tax:<br/><ul><li>40% on petroleum operations</li><li>1.75%: chargeable income > 3 million Belize dollars</li><li>3%: chargeable income < 3 million Belize dollars</li></ul><br/>Business tax based on gross income:<br/><ul><li>5% on foreign passive income</li><li>1.75% - 6% on all other foreign income</li></ul>",
			sales_tax: "12.5%",
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: "Based on annual rental value",
			property_tax_show_more: "Based on annual rental value:<br/><ul><li>12.5% on occupied properties</li><li>2% on unoccupied properties</li><li style=\"list-style: none; margin-left: -15px\">-> but not exceed 2% of market value of property</li></ul><br/>1% land tax on unimproved land",
			withholding_tax: "15% - 25%",
			transfer_tax: "Transfer of land",
			transfer_tax_show_more: "Transfer of land:<ul><li>5% to Belizean on whichever greater of consideration and land value in excess of BZD 20,000</li><li>8% to all other person</li></ul>"
		}
	},
	{
		id: 4,
		country_id: 4,
		international_compliance: {
			eu_id: 1,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Civil law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "Non-resident Corporation",
			director: {
				minimum_number: "3",
				local_resident_required: false,
				public_register: true,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "US$10,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: true
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: "Yes, and can be of any nationality",
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "net/gross taxable income",
			corporate_income_tax_show_more: "Greater of:<br/><ul><li>25% on net taxable income; or</li><li>1.17% on gross taxable income</li></ul><br/>Branch remittance tax:<ul><li>10% in addition to CIT</li></ul>",
			sales_tax: "7% standard rate",
			sales_tax_show_more: "<ul><li>7% standard rate</li><li>10% for accomodations and alcohol</li><li>15% for tobacco</li></ul>",
			capital_gain_tax: "10%",
			dividend_tax: "No, but subject to withholding tax",
			property_tax: "0 - 1%",
			property_tax_show_more: "<ul><li>0 -0.7% for properties with primary residence status</li><li>0 - 1% for all other properties without primary residence status</li></ul>",
			withholding_tax: "5% on foreign-sourced profits",
			withholding_tax_show_more: "<ul><li>5% on foreign-sourced profits</li><li>10% on domestic profits</li><li>20% in case of bearer shares</li></ul>",
			transfer_tax: "2% on transfer of real property"
		}
	},
	{
		id: 5,
		country_id: 5,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "Exempted Company",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "US$50,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: false,
			sales_tax: false,
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: false,
			withholding_tax: false,
			transfer_tax: "Stamp duty at 7.5% for transfer of most property"
		}
	},
	{
		id: 6,
		country_id: 6,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "BC/LLC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "US$50,000 (BC)",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: true
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "33%<br/>Branch remittance tax: 15%",
			sales_tax: "17% standard rate",
			capital_gain_tax: "Nil if assets sold within 1 year from purchase",
			capital_gain_tax_show_more: "<ul><li>Nil if assets sold within 1 year from purchase</li><li>Other cases: lessser of half of effective corporate income tax or 20%</li></ul>",
			dividend_tax: "Subject to corporate income tax (33%)",
			property_tax: "0.2% - 0.3%",
			withholding_tax: "15% for payments to non-residents",
			transfer_tax: "6% - 10%"
		}
	},
	{
		id: 7,
		country_id: 7,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "BC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "N/A",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: false,
			sales_tax: false,
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: "Land tax/House tax",
			property_tax_show_more: "Land tax:<br/><ul><li>US$50 per year for a half acre or less</li><li>US$150 per year for between a half acre to less than an acre</li><li>US$50 per year for each additional half acre</li></ul>",
			withholding_tax: false,
			transfer_tax: false
		}
	},
	{
		id: 8,
		country_id: 8,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "BC/LLC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: "No (LLC)<br/>Yes (BC)",
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: "No (LLC)<br/>Yes (BC)",
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "US$50,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: "Company with over USD 4mil of revenue or USD 2mil of assets would be required to file annual return",
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "30%<br/>except LLC",
			corporate_income_tax_show_more: "30%<br/>except LLC (tax resident in another country)",
			sales_tax: "16% Standard rate",
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: "5%",
			withholding_tax: "Varied",
			withholding_tax_show_more: "No withholding tax on dividend<br/>Other types: 15% - 20%",
			transfer_tax: "5% on both buyer and seller"
		}
	},
	{
		id: 9,
		country_id: 9,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "Private Limited By Shares",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: true,
				nominee: false,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: true,
				nominee: false,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "HK$10,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: "Yes / Local required",
			local_registered_agent: false
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: true,
			records_keeping: true,
			audited_accounts: true,
			annual_general_meeting: true,
			location_of_meeting: "Anywhere",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "8.25% - 16.5%",
			corporate_income_tax_show_more: "<ul><li>8.25% for the first 2mil HKD</li><li>16.5% for above</li></ul>",
			sales_tax: false,
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: "15% standard rate",
			withholding_tax: "Royalties payment",
			withholding_tax_show_more: "With Royalties payment derived from \"an associate\":<br/><ul><li>15% to non-resident individuals</li><li>8.25% - 16.5% to non-resident corporations</li></ul><br/>With Royalties payment not derived from \"an associate\":<br/><ul><li>30% of the aforementioned rate</li></ul>",
			transfer_tax: false
		}
	},
	{
		id: 10,
		country_id: 10,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "Non-resident Domestic Corporation<br/>IBC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "US$50,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: true
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: "Yes, and can be of any nationality",
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: false,
			sales_tax: false,
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: false,
			withholding_tax: false,
			transfer_tax: false
		}
	},
	{
		id: 11,
		country_id: 11,
		international_compliance: {
			eu_id: 1,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "IC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "US$50,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: "Yes / Local required",
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "27%",
			sales_tax: "15%",
			capital_gain_tax: "10% - 27%",
			capital_gain_tax_show_more: "<ul><li>10% if sold within 12 months</li><li>27% if sold over 12 months</li></ul>",
			dividend_tax: false,
			property_tax: false,
			withholding_tax: "Varied",
			withholding_tax_show_more: "<ul><li>7.5% for insurance premium under a life policy</li><li>15% for interest, royalties, mangement fees, fees for personal service, natural resource amount, or insurance premium under a contract other than a life policy</li></ul>",
			transfer_tax: "Varied",
			transfer_tax_show_more: "<ul><li>Less than WST 50,000 - 1% of the property value</li><li>WST 50,000 to less than WST 100,000 - WST 500 + 2% of the excess above WST 50,000</li><li>WST 100,000 to less than WST 200,000 - WST 1,500 + 3% of the excess above WST 100,000</li><li>Equal to or more than WST 200,000 - WST 4,500 + 4% of the excess above WST 200,000</li></ul>"
		}
	},
	{
		id: 12,
		country_id: 12,
		international_compliance: {
			eu_id: "N/A",
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "PTE LTD",
			director: {
				minimum_number: "1",
				local_resident_required: true,
				public_register: true,
				nominee: false,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: true,
				nominee: false,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "N/A",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: "Yes / Local required",
			local_registered_agent: false
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: true,
			records_keeping: true,
			audited_accounts: "Yes, but audit exemption is available",
			annual_general_meeting: true,
			location_of_meeting: "Anywhere",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: "Yes if not remitted to Singapore",
			corporate_income_tax: "17%",
			sales_tax: "7%",
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: "10% to nonresidential property",
			property_tax_show_more: "<ul><li>0 - 16% to owner-occupied residential property</li><li>10 - 20% to nonowner-occupied residential property</li><li>10% to nonresidential property</li></ul>",
			withholding_tax: "0 - 22% for interests, royalties, and fees for technical services",
			transfer_tax: true
		}
	},
	{
		id: 13,
		country_id: 13,
		international_compliance: {
			eu_id: "N/A",
			oecd: [
				"AEOI",
				"EOIR"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "Private limited",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: true,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: true,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "N/A",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: "Yes / Local required",
			local_registered_agent: false
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: true,
			records_keeping: true,
			audited_accounts: true,
			annual_general_meeting: true,
			location_of_meeting: "Anywhere",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "12.5%",
			sales_tax: "19%",
			capital_gain_tax: "20%",
			dividend_tax: false,
			property_tax: false,
			withholding_tax: "Varied",
			withholding_tax_show_more: "<ul><li>Dividends and interest paid to non-residents not subject to withholding tax</li><li>Royalties and fee for technical services paid to non-residents subject to rate ranging from 0 - 10%</li></ul>",
			transfer_tax: "3% - 8% to transfer of immovable property"
		}
	},
	{
		id: 14,
		country_id: 14,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Hybrid of common and civil law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "Ltd (Authorized company (AC))",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "US$100,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: false,
			records_keeping: "Yes, and required to file annual accounts",
			audited_accounts: false,
			annual_general_meeting: true,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "15%",
			sales_tax: "15%",
			capital_gain_tax: false,
			dividend_tax: "Foreign-sourced dividends",
			dividend_tax_show_more: "<ul><li>Dividends paid by Mauritius resident companies is exempt from tax</li><li>Foreign-sourced dividends is subject to 15% tax rate, but also eligible for partial exemption on gross amount received.</li></ul>",
			property_tax: false,
			withholding_tax: "0% on dividends",
			withholding_tax_show_more: "<ul><li>0% on dividends</li><li>15% on interest paid to resident individuals,and non-residents</li><li>10% on royalties received by residents, and 15% on non-residents</li><li>10% on fees for technical services to non-residents</li></ul>",
			transfer_tax: false
		}
	},
	{
		id: 15,
		country_id: 15,
		international_compliance: {
			eu_id: "N/A",
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "IBC (limited by shares)",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "AED 10,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "Varied",
			corporate_income_tax_show_more: "<ul><li>55% for oil and gas exploration and production company</li><li>20% for branches of foreign banks</li><li>Above rates can varies under each Emirate</li></ul>",
			sales_tax: "5%",
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: false,
			withholding_tax: false,
			transfer_tax: "Varied",
			transfer_tax_show_more: "The tax rate for transfer of real property varies depending on Emirate in which the property is located"
		}
	},
	{
		id: 16,
		country_id: 16,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Hybrid of Customary, Civil and Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "Private limited",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: true,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: true,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "GBP 10,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: "Yes, and doesn't need to reside in Jersey",
			local_registered_agent: false
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: true,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: true,
			location_of_meeting: "Anywhere",
			economic_substance: true
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "0% standard rate",
			corporate_income_tax_show_more: "<ul><li>0% standard rate</li><li>10% or 20% to some specific activities</li></ul>",
			sales_tax: "5%",
			capital_gain_tax: false,
			dividend_tax: "Dividend received from a non-resident company will be exempt from tax",
			property_tax: false,
			withholding_tax: "Varied",
			withholding_tax_show_more: "<ul><li>Dividends/Fees for technical services: 0%</li><li>Interest/Royalties: 0%, and can be subject to tax in certain case for payments to non-residents</li></ul>",
			transfer_tax: false
		}
	},
	{
		id: 17,
		country_id: 17,
		international_compliance: {
			eu_id: 2,
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Hybrid of Civil and Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "IBC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: true,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: true
			},
			share_capital: {
				standard_register: "US$100,000",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: false,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: false,
			location_of_meeting: "Anywhere",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "25%",
			corporate_income_tax_show_more: "<ul><li>25% on the first SR1mil taxable income</li><li>33% applied to above amount</li></ul>",
			sales_tax: "15%",
			capital_gain_tax: false,
			dividend_tax: false,
			property_tax: "0.25% immovable property tax on foreigners",
			withholding_tax: "15% on dividends, interest, royalties paid to non-residents",
			transfer_tax: false
		}
	},
	{
		id: 18,
		country_id: 18,
		international_compliance: {
			eu_id: "N/A",
			oecd: [
				"AEOI",
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%"
		},
		business_structure: {
			company_type: "LLP/ LTD",
			director: {
				minimum_number: "N/A for LLP;<br/>1 for LTD",
				local_resident_required: false,
				public_register: true,
				nominee: false,
				corporate: true
			},
			shareholder: {
				minimum_number: "LLP: At least 2 designated members<br/>Ltd: 1",
				local_resident_required: false,
				public_register: true,
				nominee: false,
				corporate: true
			},
			beneficial_owner: {
				public_register: "N/A",
				central_register: "N/A"
			},
			share_capital: {
				standard_register: "N/A",
				min_paid_up: false,
				capital_currency: "N/A",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: false,
			local_registered_agent: false
		},
		annual_compliance: {
			annual_return: true,
			annual_tax_return: true,
			records_keeping: true,
			audited_accounts: "Yes, but audit exemption is also available",
			annual_general_meeting: "LLP: No<br/>LTD: Yes",
			location_of_meeting: "N/A",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "19%",
			corporate_income_tax_show_more: "<ul><li>19%</li><li>25% for the year starting from 1 April 2023</li></ul>",
			sales_tax: "20%",
			capital_gain_tax: "Resident individuals/companies",
			capital_gain_tax_show_more: "For resident individuals:<br/>Higher or additional rate taxpayer:<br/><ul><li>28% on gains from residential property</li><li>20% on gains from other chargeable assets</li></ul><br/>Basic rate taxpayer:<br/><ul><li>18% on gains from residential property</li><li>10% on gains from other chargeable assets</li></ul><br/>For Sole trader and partnership: 10%<br/>For resident companies: subject to corporate taxation. Capital gain tax exemption can be availed upon meeting specific conditions.",
			dividend_tax: "Basic rate: 7.5%",
			dividend_tax_show_more: "To resident Individuals:<br/><ul><li>Tax-free dividend allowance: GBP 2,000</li><li>Basic rate: 7.5%</li><li>Higher rate: 32.5%</li><li>Additional rate: 38.1%</li></ul><br/>To resident UK company: mostly exempted whether received from local or foreign companies",
			property_tax: "Stamp duty land tax",
			property_tax_show_more: "Stamp duty land tax (SDLT) from 0 -12% for residential property<br/><ul><li>SDLT from 0 -5% for non-residential property</li><li>SDLT of 15% for residential property valued more than GBP 500,000 for companies</li></ul>",
			withholding_tax: "Varied",
			withholding_tax_show_more: "<ul><li>Dividends / Fee for technical services: 0%</li><li>Interest/Royalties: 20% for payments paid to nonresidents</li></ul>",
			transfer_tax: "N/A"
		}
	},
	{
		id: 19,
		country_id: 19,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Hybrid of Civil law and communist legal theory",
			foreign_exchange_control: true,
			foreign_ownership_control: "depending on business activity"
		},
		business_structure: {
			company_type: "LLC/JSC",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: true,
				nominee: false,
				corporate: false
			},
			shareholder: {
				minimum_number: "1 member (LLC)<br/>At least 3 shareholders (JSC)",
				local_resident_required: false,
				public_register: true,
				nominee: false,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "N/A",
				min_paid_up: false,
				capital_currency: "VND",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: true,
			company_secretary: true,
			local_registered_agent: false
		},
		annual_compliance: {
			annual_return: false,
			annual_tax_return: true,
			records_keeping: true,
			audited_accounts: "Yes, for foreign-owned companies",
			annual_general_meeting: "Yes (JSC)<br/>No (LTD)",
			location_of_meeting: "Vietnam",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: false,
			corporate_income_tax: "20%",
			corporate_income_tax_show_more: "20% for annually income under 20 billion VND; 22% for above",
			sales_tax: "0 - 15%",
			capital_gain_tax: "Individual/Corporation",
			capital_gain_tax_show_more: "<ul><li>0.1% for individual</li><li>20% for corporation</li></ul>",
			dividend_tax: "5% (individual)<br/>No dividend tax rate for Ltd, JSC",
			property_tax: "N/A",
			withholding_tax: "Including VAT and Corporate Income Tax",
			transfer_tax: "20% for corporation<br/>2% for individual"
		}
	},
	{
		id: 20,
		country_id: 20,
		international_compliance: {
			eu_id: 3,
			oecd: [
				"EOIR",
				"BEPS"
			]
		},
		legal_structure: {
			legal_basic: "Common law",
			foreign_exchange_control: false,
			foreign_ownership_control: "100%<br/>except S corp (100% US resident)"
		},
		business_structure: {
			company_type: "LLC/ Corporation",
			director: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: false,
				corporate: false
			},
			shareholder: {
				minimum_number: "1",
				local_resident_required: false,
				public_register: false,
				nominee: false,
				corporate: true
			},
			beneficial_owner: {
				public_register: false,
				central_register: false
			},
			share_capital: {
				standard_register: "N/A",
				min_paid_up: false,
				capital_currency: "Any",
				bearer_shares: false
			}
		},
		initial_requirement: {
			local_registered_address: false,
			company_secretary: false,
			local_registered_agent: true
		},
		annual_compliance: {
			annual_return: "Corporation: Yes<br/>LLC: No ",
			annual_tax_return: true,
			records_keeping: true,
			audited_accounts: false,
			annual_general_meeting: "Corporation: Yes<br/>LLC: No",
			location_of_meeting: "Anywhere",
			economic_substance: false
		},
		local_tax_profile: {
			offshore_tax_exemption: true,
			corporate_income_tax: "Corporation<br/>8.7% (State)<br/>21% (federal)",
			sales_tax: "Gross Receipt Tax",
			sales_tax_show_more: "No sale tax<br/>Gross Receipt Tax: 0.0945% to 1.9914%",
			capital_gain_tax: "Resident/Non-resident",
			capital_gain_tax_show_more: "Individual (Resident)<br/><ul><li>Federal: 0 -15%-20%</li><li>State: 0 - 6.6%</li></ul><br/>Individual (Non-Resident)<br/><ul><li>Federal: 30%</li><li>State: 0 - 6.6%</li></ul>",
			dividend_tax: "Resident/Non-resident",
			dividend_tax_show_more: "For Individual (Resident):<br/>* At State level: 0 - 6.6%<br/>* At federal level:<br/>- Ordinary Dividend Tax rate: 10 -37%<br/>- Qualified Dividend Tax rate: 0 - 20%<br/>For Individual (Non-Resident):<br/>* At state level: 0 - 6.6%<br/>At federeal level: 30%",
			property_tax: "No (Real) Property tax at State level",
			withholding_tax: "0 - 6,6%  (salary of employee)",
			transfer_tax: "N/A"
		}
	}
];
var dataComparison = {
	countries: countries,
	public_register: public_register,
	offshore_exemptions: offshore_exemptions,
	eu_list: eu_list,
	audited_accounts: audited_accounts,
	select_default: select_default,
	common_used: common_used,
	DataFeatures: DataFeatures,
	DataComparison: DataComparison
};

const Title = props => {
  const {
    text,
    as,
    hasid
  } = props;
  const As = as ? as : 'h2';
  return /*#__PURE__*/React.createElement(As, Object.assign({
    id: text && hasid ? sanitizeTitle(text) : ''
  }, mergeProps(props)), text);
};

var styles$4 = {"btn_back_container":"_styles-module__btn_back_container__k-p5u","btn_wrapper":"_styles-module__btn_wrapper__1UAjB","button":"_styles-module__button__TWj4B","btn_show":"_styles-module__btn_show__1ag_K","searchContainer":"_styles-module__searchContainer__1mjEu","btn_back_top":"_styles-module__btn_back_top__3zVi-","select_country":"_styles-module__select_country__vdbQ8","select_wrapper":"_styles-module__select_wrapper__2IKE1","select_title":"_styles-module__select_title__2Tj9L","comparison_table_btn":"_styles-module__comparison_table_btn__1zUBn","comparison_container_mb":"_styles-module__comparison_container_mb__3mgL7","comparison_wrapper_mb":"_styles-module__comparison_wrapper_mb__3MbTE","col_auto":"_styles-module__col_auto__15j2P","btn_show_mb":"_styles-module__btn_show_mb__2MGIM","comparisonTable_mb":"_styles-module__comparisonTable_mb__3Hskw","comparison_text_mb":"_styles-module__comparison_text_mb__3Gvzn","search":"_styles-module__search__1siYd","slider":"_styles-module__slider__3h_MZ","slider_container":"_styles-module__slider_container__3P27V","slide_btn":"_styles-module__slide_btn__3b_Q7","sliderNext":"_styles-module__sliderNext__3oxJl","sliderPrev":"_styles-module__sliderPrev__2TxT7","slider_item":"_styles-module__slider_item__2efBa","card":"_styles-module__card__o0GI0","card_wrapper":"_styles-module__card_wrapper__1OSoD","card_inside":"_styles-module__card_inside__3-3OD","img_wrapper":"_styles-module__img_wrapper__3kGrt","cardImg":"_styles-module__cardImg__4kBhB","cardTitle":"_styles-module__cardTitle__1FF3S","contentWrapper":"_styles-module__contentWrapper__1SQUQ","content":"_styles-module__content__35To1","cardIconNext":"_styles-module__cardIconNext__1-hWb","company_type":"_styles-module__company_type__GQ_B1","dialog":"_styles-module__dialog__3O3Dw","nav":"_styles-module__nav__C1Laj","navLink":"_styles-module__navLink__4KplV","back":"_styles-module__back__jlBD8","backMobile_wrapper":"_styles-module__backMobile_wrapper__2RUrM","btn_back_bottom":"_styles-module__btn_back_bottom__1XmGT","backMobile":"_styles-module__backMobile__-JcIK","Header":"_styles-module__Header__2PqMP","modal_container":"_styles-module__modal_container__1THqU","modal_wrapper":"_styles-module__modal_wrapper__CagOn","fadeIn":"_styles-module__fadeIn__3ISmH","closeModal":"_styles-module__closeModal__34XBz","modal_backdrop":"_styles-module__modal_backdrop__25fsQ","tab_container":"_styles-module__tab_container__TXdw8","tab_wrapper":"_styles-module__tab_wrapper__4AX0J","tab_item":"_styles-module__tab_item__rIwNt","active_tab":"_styles-module__active_tab__2y820","Body":"_styles-module__Body__1qDX-"};

const NextArrow = props => {
  const {
    className,
    style,
    onClick
  } = props;
  return /*#__PURE__*/React.createElement("button", {
    className: `${styles$4.sliderNext} btn rounded-circle position-absolute ${styles$4.slide_btn}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(IconContext.Provider, {
    value: {
      color: '#c4c4c4'
    }
  }, /*#__PURE__*/React.createElement(GrNext, null)));
};
const PrevArrow = props => {
  const {
    className,
    style,
    onClick
  } = props;
  return /*#__PURE__*/React.createElement("button", {
    className: `${styles$4.sliderPrev} btn rounded-circle position-absolute ${styles$4.slide_btn}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(IconContext.Provider, {
    value: {
      color: '#c4c4c4'
    }
  }, /*#__PURE__*/React.createElement(GrPrevious, null)));
};
function IncorporationCountry({
  data
}) {
  useEffect(() => {
    if (window.history && window.history.pushState) {
      window.history.pushState('forward', null, './incorporation-country');
      window.onpopstate = function () {
        handleBack();
      };
    }
  }, []);
  const [dataOnboarding, setDataOnboarding] = useState({});
  useEffect(() => {
    const dataOnboardingLocalStorage = window.localStorage.getItem('data_onboarding');
    if (dataOnboardingLocalStorage) {
      const data = JSON.parse(dataOnboardingLocalStorage);
      setDataOnboarding(data);
    }
  }, []);
  const [dataCountries, setDataCountries] = useState([]);
  const [dataSlider, setDataSlider] = useState([]);
  const [optionSelected, setOptionSelected] = useState({
    value: 'all',
    label: 'All'
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://core.test-lp.bbcincorp.com/api/onboarding/country/entity_suffix`).then(res => {
      let data = _.sortBy(res.data.data, item => item.name).filter(item => item.id !== 111);
      setDataCountries(data);
      setDataSlider(data);
    });
  }, []);
  const clearCustomer = () => {
    let customer = JSON.parse(window.localStorage.getItem('customer'));
    delete customer.company_country_id;
    delete customer.company_name;
    delete customer.entity_type_id;
    delete customer.package_id;
    window.localStorage.setItem('customer', JSON.stringify(customer));
  };
  const handleBack = () => {
    clearCustomer();
    window.location.href = '/select-service';
  };
  const handleClick = (id, name) => {
    var _data$EntityTypes$, _customer$signature;
    let data = _.filter(dataCountries, item => item.id == id)[0];
    let isCompanyType = (data === null || data === void 0 ? void 0 : data.EntityTypes) && (data === null || data === void 0 ? void 0 : data.EntityTypes.length) > 1;
    let entity_type_id = isCompanyType ? null : data === null || data === void 0 ? void 0 : (_data$EntityTypes$ = data.EntityTypes[0]) === null || _data$EntityTypes$ === void 0 ? void 0 : _data$EntityTypes$.id;
    let pathname = isCompanyType ? '/incorporation-company-type' : '/incorporation-entity-name-check';
    window.localStorage.setItem('country', JSON.stringify(name));
    window.localStorage.setItem('data_onboarding', JSON.stringify({
      ...dataOnboarding,
      incorporation: {
        country: data,
        entity_type_id: entity_type_id
      }
    }));
    let customer = JSON.parse(window.localStorage.getItem('customer'));
    if (customer !== null && customer !== void 0 && (_customer$signature = customer.signature) !== null && _customer$signature !== void 0 && _customer$signature.signature) {
      var _customer$signature2;
      axios.put(`https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${customer === null || customer === void 0 ? void 0 : (_customer$signature2 = customer.signature) === null || _customer$signature2 === void 0 ? void 0 : _customer$signature2.signature}`, {
        company_country_id: id,
        entity_type_id: entity_type_id
      });
    }
    window.location.href = pathname;
  };
  useEffect(() => {
    const customer = JSON.parse(window.localStorage.getItem('customer'));
    if (Array.isArray(dataSlider) && dataSlider.length > 0) {
      if (customer !== null && customer !== void 0 && customer.company_country_id) {
        let countryId = parseInt(customer === null || customer === void 0 ? void 0 : customer.company_country_id);
        if (dataSlider.find(item => item.id === countryId)) {
          var _dataSlider$find;
          let name = (_dataSlider$find = dataSlider.find(item => item.id === countryId)) === null || _dataSlider$find === void 0 ? void 0 : _dataSlider$find.name;
          handleClick(countryId, name);
        } else {
          clearCustomer();
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
  }, [dataSlider]);
  const setSelectedOption = e => {
    setOptionSelected(e);
    if (e.value && e.value !== 'all') {
      setDataSlider(_.filter(dataCountries, item => item.id == e.value));
    } else {
      setDataSlider(dataCountries);
    }
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesPerRow: 3,
    rows: 2,
    appendDots: dots => /*#__PURE__*/React.createElement("ul", null, dots),
    customPaging: i => /*#__PURE__*/React.createElement("span", null, i + 1),
    nextArrow: /*#__PURE__*/React.createElement(NextArrow, null),
    prevArrow: /*#__PURE__*/React.createElement(PrevArrow, null),
    responsive: [{
      breakpoint: 1399,
      settings: {
        slidesPerRow: 2
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesPerRow: 2,
        arrows: false
      }
    }, {
      breakpoint: 575,
      settings: 'unslick'
    }]
  };
  const wrapperRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tab, setTab] = useState(1);
  useOnClickOutside(wrapperRef, () => {
    setShow(false);
  });
  return (
    /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      className: `${styles$4.btn_back_top}  ${styles$4.Header}`
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.btn_back_container
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.btn_wrapper
    }, /*#__PURE__*/React.createElement("button", {
      className: styles$4.back,
      onClick: handleBack
    }, "Back")))), /*#__PURE__*/React.createElement("div", {
      className: styles$4.select_country
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.select_wrapper
    }, /*#__PURE__*/React.createElement(Title, {
      text: "Country and Company Type",
      className: styles$4.select_title
    }), /*#__PURE__*/React.createElement("div", {
      className: styles$4.searchContainer
    }, /*#__PURE__*/React.createElement(SelectSearchInside, {
      instanceId: "incorporation-country-search",
      value: optionSelected,
      options: [{
        value: 'all',
        label: 'All'
      }, ...dataCountries.map(item => {
        return {
          value: item.id,
          label: item.name
        };
      })],
      selectBorder: true,
      placeholder: "Search country here",
      toggleClass: `${styles$4.search}`,
      onChange: setSelectedOption
    }))), /*#__PURE__*/React.createElement("div", {
      className: styles$4.comparison_table_btn
    }, /*#__PURE__*/React.createElement("button", {
      className: `${styles$4.button} ${styles$4.btn_show}`,
      onClick: handleShow
    }, /*#__PURE__*/React.createElement("img", {
      src: comparisonTable,
      alt: "bg-left-obd"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-1"
    }, "Comparison table")))), /*#__PURE__*/React.createElement("div", {
      className: styles$4.Body
    }, loading ? /*#__PURE__*/React.createElement("div", {
      className: "embed-responsive embed-responsive-21by9 mt-4 mt-lg-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "embed-responsive-item d-flex align-items-center justify-content-center"
    }, /*#__PURE__*/React.createElement(Spinner, {
      animation: "border",
      variant: "primary"
    }))) : dataSlider.length > 0 ? /*#__PURE__*/React.createElement(Slider, Object.assign({
      className: `${styles$4.slider} ${styles$4.slider_container}`
    }, sliderSettings), dataSlider.map((item, index) => /*#__PURE__*/React.createElement("div", {
      className: `${styles$4.slider_item}`,
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: `${styles$4.card} ${styles$4.card_wrapper}`,
      onClick: () => handleClick(item.id, item.name)
    }, /*#__PURE__*/React.createElement("div", {
      className: `${styles$4.card_inside}`
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.img_wrapper
    }, /*#__PURE__*/React.createElement("img", {
      src: `https://test.bbcincorp.com/flags/1x1/${item.country_code.toLowerCase()}.svg`,
      className: `${styles$4.cardImg} rounded-circle shadow-sm`,
      alt: `${item.name}`
    })), /*#__PURE__*/React.createElement("div", {
      className: styles$4.contentWrapper
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.content
    }, /*#__PURE__*/React.createElement("div", {
      className: `${styles$4.cardTitle}`
    }, item.name), item.EntityTypes.length > 0 && /*#__PURE__*/React.createElement("ul", {
      className: styles$4.company_type
    }, item.EntityTypes.map((item, index) => /*#__PURE__*/React.createElement("li", {
      key: index
    }, item.name)))))), /*#__PURE__*/React.createElement("div", {
      className: `${styles$4.cardIconNext}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "mb-1"
    }, "\u2192")))))) : /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
      className: styles$4.comparison_container_mb
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.comparison_wrapper_mb
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.col_auto
    }, /*#__PURE__*/React.createElement("button", {
      className: `${styles$4.button} ${styles$4.btn_show_mb}`,
      onClick: handleShow
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.comparisonTable_mb
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.col_auto
    }, /*#__PURE__*/React.createElement("img", {
      src: comparisonTable,
      alt: "bg-left-obd",
      style: {
        width: '20px'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: styles$4.comparison_text_mb
    }, "Comparison table"))))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      className: styles$4.backMobile_wrapper
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.col_auto
    }, /*#__PURE__*/React.createElement("button", {
      className: `${styles$4.backMobile} ${styles$4.btn_back_bottom}`,
      onClick: handleBack
    }, "Back")))), show && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: styles$4.modal_backdrop
    }), /*#__PURE__*/React.createElement("div", {
      className: styles$4.modal_container
    }, /*#__PURE__*/React.createElement("div", {
      ref: wrapperRef,
      className: styles$4.modal_wrapper
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.closeModal,
      style: {
        position: 'absolute',
        top: '0.25rem',
        right: '0.25rem',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: handleClose
    }, /*#__PURE__*/React.createElement(IconContext.Provider, {
      value: {
        style: {
          color: 'c4c4c4'
        }
      }
    }, /*#__PURE__*/React.createElement(IoMdCloseCircle, {
      size: `2rem`
    })))), /*#__PURE__*/React.createElement("div", {
      className: styles$4.tab_container
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$4.tab_wrapper
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setTab(1),
      className: `${tab === 1 ? styles$4.active_tab : ''} ${styles$4.tab_item}`
    }, "Jurisdiction's Features"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setTab(2),
      className: `${tab === 2 ? styles$4.active_tab : ''} ${styles$4.tab_item}`
    }, "Jurisdiction Comparison"))), tab === 1 ? /*#__PURE__*/React.createElement(JurisdictionFeatures, {
      data: dataComparison.DataFeatures,
      countries: dataComparison.countries,
      publicRegister: dataComparison.public_register,
      euList: dataComparison.eu_list,
      selectDefault: dataComparison.select_default,
      auditList: dataComparison.audited_accounts,
      exemptionList: dataComparison.offshore_exemptions,
      commonUsedList: dataComparison.common_used
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#333'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: '16px'
      }
    }, "The following table compares different jurisdictions (maximum 3 at one time) in regard to crucial aspects that you need to know when incorporating."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: '16px'
      }
    }, /*#__PURE__*/React.createElement("b", null, "How to use: "), "Please select the jurisdiction you want to compare in the header ", /*#__PURE__*/React.createElement("b", null, "[Country Name]"), " in the table to see the information"), /*#__PURE__*/React.createElement(JurisdictionComparison, {
      data: dataComparison.DataComparison,
      countries: dataComparison.countries
    }))))))
  );
}

var styles$5 = {"description":"_styles-module__description__LHwfV"};

const Component = ({
  ...props
}) => {
  return /*#__PURE__*/React.createElement("div", Object.assign({}, props, {
    className: `${styles$5.description} mt-2 mt-lg-3 mb-0 ${props.className ? `${props.className}` : ''}`,
    style: {
      ...props.style
    }
  }), props.children);
};
Component.propTypes = {};
Component.defaultProps = {};

var styles$6 = {"block_on_md":"_styles-module__block_on_md__3JxMi","block_on_lg":"_styles-module__block_on_lg__e6rhF","none_on_md":"_styles-module__none_on_md__21bXq","flex_on_md":"_styles-module__flex_on_md__aMqYw","btn_back_top":"_styles-module__btn_back_top__1b_B-","btn_back_wrapper":"_styles-module__btn_back_wrapper__1ahW-","btn_primary":"_styles-module__btn_primary__1vbvH","title":"_styles-module__title__1XUe2","description_wrapper":"_styles-module__description_wrapper__N12AA","comparison_wrapper":"_styles-module__comparison_wrapper__3r5GS","button":"_styles-module__button__35es-","spinner_wrapper":"_styles-module__spinner_wrapper__2kRrU","card_wrapper":"_styles-module__card_wrapper__k0Id7","card_responsive":"_styles-module__card_responsive__RkWRK","card":"_styles-module__card__2oJlr","cardImg":"_styles-module__cardImg__2Cdaq","cardTitle":"_styles-module__cardTitle__2TkoH","comparison_bottom":"_styles-module__comparison_bottom__szn3i","dialog":"_styles-module__dialog__2srQO","content":"_styles-module__content__V2-t3","headerModal":"_styles-module__headerModal__2ZKPb","bodyModal":"_styles-module__bodyModal__2upb6","rowItem":"_styles-module__rowItem__2sAwf","item":"_styles-module__item__1pyid","tableBody":"_styles-module__tableBody__3Q342","grouptitle":"_styles-module__grouptitle__3xysj","check":"_styles-module__check__CXWwz","checkX":"_styles-module__checkX__36Y0r","dialogVietnam":"_styles-module__dialogVietnam__39lsG","modalVietnam":"_styles-module__modalVietnam__242RT","Header":"_styles-module__Header__3HYQ8","bottom":"_styles-module__bottom__1OWpN","btn_back_bottom_wrapper":"_styles-module__btn_back_bottom_wrapper__1Sbe6","btn_back_bottom":"_styles-module__btn_back_bottom__38m4y","modal_container":"_styles-module__modal_container__34ADm","modal_wrapper":"_styles-module__modal_wrapper__OoXyP","fadeIn":"_styles-module__fadeIn__1BVrX","modal_backdrop":"_styles-module__modal_backdrop__2mHQ2","closeModal":"_styles-module__closeModal___X3hR","Body":"_styles-module__Body__3p-Pa"};

function TablePopup(country_id) {
  let content = '';
  switch (country_id) {
    case 250:
      content = /*#__PURE__*/React.createElement("div", {
        className: styles$6.bodyModal
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.rowItem
      }, /*#__PURE__*/React.createElement("span", {
        className: styles$6.block_on_md
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          textAlign: 'center'
        }
      }, "LLC"), /*#__PURE__*/React.createElement("span", {
        style: {
          textAlign: 'center'
        }
      }, "Corporation")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.tableBody
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.grouptitle
      }, "Initial requirement"), /*#__PURE__*/React.createElement("div", {
        style: {
          paddingBottom: '8px'
        },
        className: "group"
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Director"), /*#__PURE__*/React.createElement("span", null, "None"), /*#__PURE__*/React.createElement("span", null, "At least one")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Shareholders"), /*#__PURE__*/React.createElement("span", null, "At least one member"), /*#__PURE__*/React.createElement("span", null, "At least one shareholder")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Tax treatment"), /*#__PURE__*/React.createElement("span", null, "Individual level"), /*#__PURE__*/React.createElement("span", null, "Company level")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Legal status"), /*#__PURE__*/React.createElement("span", null, "Separate legal entity"), /*#__PURE__*/React.createElement("span", null, "Separate legal entity")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Owner\u2019s limited liability"), /*#__PURE__*/React.createElement("span", null, "Bounded to interests owned"), /*#__PURE__*/React.createElement("span", null, "Bounded to shares owned")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.grouptitle
      }, "Corporate compliance"), /*#__PURE__*/React.createElement("div", {
        className: "group"
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Annual return"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "No"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.checkX
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Tax filing"), /*#__PURE__*/React.createElement("span", {
        className: styles$6.flex_on_md
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes\xA0"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }), /*#__PURE__*/React.createElement("br", {
        className: styles$6.none_on_md
      }), "(Only nominal)"), /*#__PURE__*/React.createElement("span", {
        className: styles$6.flex_on_md
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes\xA0"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }), /*#__PURE__*/React.createElement("br", {
        className: styles$6.none_on_md
      }), "(Only nominal)")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Books and records maintenance"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "No"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.checkX
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })))))));
      break;
    case 237:
      content = /*#__PURE__*/React.createElement("div", {
        className: styles$6.bodyModal
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.rowItem
      }, /*#__PURE__*/React.createElement("span", {
        className: styles$6.block_on_md
      }), /*#__PURE__*/React.createElement("span", null, "Limited Liability Partnership"), /*#__PURE__*/React.createElement("span", null, "Limited Company")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.tableBody
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.grouptitle
      }, "Initial requirement"), /*#__PURE__*/React.createElement("div", {
        className: "group",
        style: {
          paddingBottom: '8px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Legal status"), /*#__PURE__*/React.createElement("span", null, "Separate legal entity"), /*#__PURE__*/React.createElement("span", null, "Separate legal entity")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Owner\u2019s liability"), /*#__PURE__*/React.createElement("span", null, "Limited to capital contribution"), /*#__PURE__*/React.createElement("span", null, "Limited to shares owned")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Tax treatment"), /*#__PURE__*/React.createElement("span", null, "Individual level"), /*#__PURE__*/React.createElement("span", null, "Corporate level")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Director"), /*#__PURE__*/React.createElement("span", null, "None"), /*#__PURE__*/React.createElement("span", null, "At least one")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Other members"), /*#__PURE__*/React.createElement("span", null, "At least two designated members"), /*#__PURE__*/React.createElement("span", null, "At least one shareholder")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.grouptitle
      }, "Corporate compliance"), /*#__PURE__*/React.createElement("div", {
        className: "group"
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Annual return"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Tax filing"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Books and records maintenance"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Annual general meeting"), /*#__PURE__*/React.createElement("span", null, "Not required"), /*#__PURE__*/React.createElement("span", null, "Required"))))));
      break;
    case 244:
      content = /*#__PURE__*/React.createElement("div", {
        className: `${styles$6.modalVietnam}`
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.rowItem
      }, /*#__PURE__*/React.createElement("span", {
        className: styles$6.block_on_lg
      }), /*#__PURE__*/React.createElement("span", null, "LLC"), /*#__PURE__*/React.createElement("span", null, "JSC"), /*#__PURE__*/React.createElement("span", null, "Branch"), /*#__PURE__*/React.createElement("span", null, "Rep. Office")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.tableBody
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.grouptitle
      }, "Initial requirement"), /*#__PURE__*/React.createElement("div", {
        className: "group",
        style: {
          paddingBottom: '8px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Legal status"), /*#__PURE__*/React.createElement("span", null, "Separate legal entity"), /*#__PURE__*/React.createElement("span", null, "Separate legal entity"), /*#__PURE__*/React.createElement("span", null, "An extension of its parent company"), /*#__PURE__*/React.createElement("span", null, "An extension of its parent company")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Owner\u2019s liability"), /*#__PURE__*/React.createElement("span", null, "Limited to capital contribution"), /*#__PURE__*/React.createElement("span", null, "Limited to shares owned"), /*#__PURE__*/React.createElement("span", null, "Extended to parent company"), /*#__PURE__*/React.createElement("span", null, "Extended to parent company")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Tax treatment"), /*#__PURE__*/React.createElement("span", null, "Corporate level"), /*#__PURE__*/React.createElement("span", null, "Corporate level"), /*#__PURE__*/React.createElement("span", null, "Corporate level"), /*#__PURE__*/React.createElement("span", null, "Not permitted to trade or conduct business")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Director"), /*#__PURE__*/React.createElement("span", null, "At least one"), /*#__PURE__*/React.createElement("span", null, "At least one"), /*#__PURE__*/React.createElement("span", null, "N/A"), /*#__PURE__*/React.createElement("span", null, "N/A")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Other members"), /*#__PURE__*/React.createElement("span", null, "At least one member"), /*#__PURE__*/React.createElement("span", null, "At least three founding shareholders"), /*#__PURE__*/React.createElement("span", null, "One head of branch"), /*#__PURE__*/React.createElement("span", null, "One head of Rep. Office")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.grouptitle
      }, "Corporate compliance"), /*#__PURE__*/React.createElement("div", {
        className: "group"
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Annual return"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Tax filing"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Books and records maintenance"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_lg
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Annual general meeting"), /*#__PURE__*/React.createElement("span", null, "Required for multi-member LLC"), /*#__PURE__*/React.createElement("span", null, "Yes"), /*#__PURE__*/React.createElement("span", null, "Not required"), /*#__PURE__*/React.createElement("span", null, "Not required"))))));
      break;
    case 23:
    case 205:
    case 209:
      content = /*#__PURE__*/React.createElement("div", {
        className: styles$6.bodyModal
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.rowItem
      }, /*#__PURE__*/React.createElement("span", {
        className: styles$6.block_on_md
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          textAlign: 'center'
        }
      }, "LLC"), /*#__PURE__*/React.createElement("span", {
        style: {
          textAlign: 'center'
        }
      }, "IBC/BC")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.tableBody
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.grouptitle
      }, "Initial requirement"), /*#__PURE__*/React.createElement("div", {
        className: "group"
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Director"), /*#__PURE__*/React.createElement("span", null, "None"), /*#__PURE__*/React.createElement("span", null, "At least one")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Shareholders"), /*#__PURE__*/React.createElement("span", null, "At least one member"), /*#__PURE__*/React.createElement("span", null, "At least one shareholder")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Tax treatment"), /*#__PURE__*/React.createElement("span", null, "Individual level"), /*#__PURE__*/React.createElement("span", null, "Company level")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Legal status"), /*#__PURE__*/React.createElement("span", null, "Separate legal entity"), /*#__PURE__*/React.createElement("span", null, "Separate legal entity")), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Owner\u2019s limited liability"), /*#__PURE__*/React.createElement("span", null, "Bounded to interests owned"), /*#__PURE__*/React.createElement("span", null, "Bounded to shares owned")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.grouptitle
      }, "Corporate compliance"), /*#__PURE__*/React.createElement("div", {
        className: "group"
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Annual return"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "No"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.checkX
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "No"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.checkX
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Tax filing"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "No"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.checkX
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "No"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.checkX
      }))), /*#__PURE__*/React.createElement("div", {
        className: styles$6.item
      }, /*#__PURE__*/React.createElement("span", null, "Books and records maintenance"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: styles$6.block_on_md
      }, "Yes"), /*#__PURE__*/React.createElement("i", {
        className: styles$6.check
      })))))));
      break;
  }
  return content;
}
function IncorporationCompanyType({
  data
}) {
  const [dataOnboarding, setDataOnboarding] = useState({});
  const [dataCountry, setDataCountry] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (window.history && window.history.pushState) {
      window.history.pushState('forward', null, './incorporation-company-type');
      window.onpopstate = function () {
        handleBack();
      };
    }
  }, []);
  useEffect(() => {
    const dataOnboardingLocalStorage = window.localStorage.getItem('data_onboarding');
    if (dataOnboardingLocalStorage) {
      var _data$incorporation, _data$incorporation2, _data$incorporation4;
      const data = JSON.parse(dataOnboardingLocalStorage);
      if (data !== null && data !== void 0 && (_data$incorporation = data.incorporation) !== null && _data$incorporation !== void 0 && _data$incorporation.company_name && (data === null || data === void 0 ? void 0 : (_data$incorporation2 = data.incorporation) === null || _data$incorporation2 === void 0 ? void 0 : _data$incorporation2.company_name.length) > 0) {
        var _data$incorporation3;
        data === null || data === void 0 ? void 0 : (_data$incorporation3 = data.incorporation) === null || _data$incorporation3 === void 0 ? void 0 : _data$incorporation3.company_name.map(item => delete item.suffix);
      }
      setDataOnboarding(data);
      setDataCountry(data === null || data === void 0 ? void 0 : (_data$incorporation4 = data.incorporation) === null || _data$incorporation4 === void 0 ? void 0 : _data$incorporation4.country);
    }
  }, []);
  const handleClick = id => {
    var _customer$signature;
    window.localStorage.setItem('data_onboarding', JSON.stringify({
      ...dataOnboarding,
      incorporation: {
        ...dataOnboarding.incorporation,
        entity_type_id: id
      }
    }));
    let customer = JSON.parse(window.localStorage.getItem('customer'));
    if (customer !== null && customer !== void 0 && (_customer$signature = customer.signature) !== null && _customer$signature !== void 0 && _customer$signature.signature) {
      var _customer$signature2;
      axios.put(`https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${customer === null || customer === void 0 ? void 0 : (_customer$signature2 = customer.signature) === null || _customer$signature2 === void 0 ? void 0 : _customer$signature2.signature}`, {
        entity_type_id: id
      });
    }
    window.location.href = '/incorporation-entity-name-check';
  };
  const handleBack = () => {
    let customer = JSON.parse(window.localStorage.getItem('customer'));
    delete customer.company_country_id;
    delete customer.company_name;
    delete customer.entity_type_id;
    delete customer.package_id;
    window.localStorage.setItem('customer', JSON.stringify(customer));
    window.location.href = '/incorporation-country';
  };
  useEffect(() => {
    const customer = JSON.parse(window.localStorage.getItem('customer'));
    if (customer !== null && customer !== void 0 && customer.company_country_id && customer !== null && customer !== void 0 && customer.entity_type_id && customer !== null && customer !== void 0 && customer.package_id) {
      handleClick(parseInt(customer === null || customer === void 0 ? void 0 : customer.entity_type_id));
    } else {
      setLoading(false);
    }
  }, [dataOnboarding]);
  const wrapperRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useOnClickOutside(wrapperRef, () => {
    setShow(false);
  });
  return (
    /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      className: `${styles$6.btn_back_top} ${styles$6.Header}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `${styles$6.btn_back_wrapper}`
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: styles$6.btn_primary,
      style: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 500
      },
      onClick: handleBack
    }, "Back")))), /*#__PURE__*/React.createElement(Title, {
      text: "Country and Company Type",
      className: styles$6.title
    }), /*#__PURE__*/React.createElement("div", {
      className: styles$6.Body
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$6.description_wrapper
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1'
      }
    }, /*#__PURE__*/React.createElement(Component, null, "Country:", ' ', /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, dataCountry === null || dataCountry === void 0 ? void 0 : dataCountry.name)), /*#__PURE__*/React.createElement(Component, null, "Company type: ")), /*#__PURE__*/React.createElement("div", {
      className: styles$6.comparison_wrapper
    }, /*#__PURE__*/React.createElement("button", {
      className: styles$6.button,
      style: {
        padding: '16px 8px 8px 8px',
        border: '1px solid transparent',
        marginTop: '16px',
        cursor: 'pointer'
      },
      onClick: handleShow
    }, /*#__PURE__*/React.createElement("img", {
      src: comparisonTable,
      alt: "bg-left-obd"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '4px'
      }
    }, "Comparison table")))), (dataCountry === null || dataCountry === void 0 ? void 0 : dataCountry.EntityTypes) && /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '0 auto',
        maxWidth: '992px'
      }
    }, loading ? /*#__PURE__*/React.createElement("div", {
      className: `${styles$6.spinner_wrapper} embed-responsive embed-responsive-21by9`
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      className: "embed-responsive-item"
    }, /*#__PURE__*/React.createElement(Spinner, {
      animation: "border",
      variant: "primary"
    }))) : /*#__PURE__*/React.createElement("div", {
      className: styles$6.card_wrapper
    }, dataCountry === null || dataCountry === void 0 ? void 0 : dataCountry.EntityTypes.map((item, index) => /*#__PURE__*/React.createElement("div", {
      className: styles$6.card_responsive,
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        width: '100%'
      },
      className: styles$6.card,
      onClick: () => handleClick(item.id)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: buildingImg,
      className: `${styles$6.cardImg} rounded-circle`,
      alt: `${item.name}`
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: '24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: `${styles$6.cardTitle}`
    }, item.name)))))))))), /*#__PURE__*/React.createElement("div", {
      className: `${styles$6.comparison_bottom}`
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        width: '100%',
        padding: '8px'
      },
      className: styles$6.button,
      onClick: handleShow
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: comparisonTable,
      alt: "bg-left-obd",
      style: {
        width: '20px'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1',
        paddingLeft: '8px'
      }
    }, "Comparison table"))))))), /*#__PURE__*/React.createElement("section", {
      className: styles$6.bottom
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$6.btn_back_bottom_wrapper
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$6.btn_back_bottom
    }, /*#__PURE__*/React.createElement("a", {
      style: {
        color: '#2c2c51',
        fontWeight: 500,
        padding: '0',
        cursor: 'pointer'
      },
      onClick: handleBack
    }, "Back")))), show && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: styles$6.modal_backdrop
    }), /*#__PURE__*/React.createElement("div", {
      className: styles$6.modal_container
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$6.modal_wrapper
    }, /*#__PURE__*/React.createElement("div", {
      ref: wrapperRef,
      className: styles$6.dialog
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$6.closeModal,
      style: {
        position: 'absolute',
        top: '0.25rem',
        right: '0.5rem',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: handleClose
    }, /*#__PURE__*/React.createElement(IconContext.Provider, {
      value: {
        style: {
          color: 'c4c4c4'
        }
      }
    }, /*#__PURE__*/React.createElement(IoMdCloseCircle, {
      size: `1.5rem`
    })))), TablePopup(dataCountry.id))))))
  );
}

var index = {
  Register,
  SelectService,
  IncorporationCountry,
  IncorporationCompanyType
};

export default index;
export { IncorporationCompanyType, IncorporationCountry, Register, SelectService };
//# sourceMappingURL=index.modern.js.map
