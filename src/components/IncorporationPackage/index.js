import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Title from '../common/Title'
import { useOnClickOutside } from '../common/functions'
import {
  Spinner,
  Form,
  OverlayTrigger,
  Popover,
  Tooltip
} from 'react-bootstrap'
import Modal from '../common/Modal'
import Description from '../common/Description'
import parse from 'html-react-parser'
import _ from 'lodash'
import axios from 'axios'
import { IconContext } from 'react-icons'
import { IoMdCloseCircle } from 'react-icons/io'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { sanitizeTitle } from '../common/functions'
import { BiLoaderAlt } from 'react-icons/bi'

import comparisonImg from 'assets/comparison-table.png'
import pacbasic from 'assets/pac-basic.png'
import pacpremium from 'assets/pac-premium.png'
import pacstandard from 'assets/pac-standard.png'
import locallite from 'assets/local-lite.png'
import localstandard from 'assets/local-standard.png'
import foreignerbasic from 'assets/foreigner-basic.png'
import foreignerultra from 'assets/foreigner-ultra.png'

function popupPackages(country_id, entity_type_id, tab) {
  let content = ''
  switch (parseInt(country_id)) {
    // hong kong
    case 98:
      content = `
				<thead>
					<tr>
						<th></th>
						<th class="basic title">BASIC</th>
						<th class="standard title">STANDARD</th>
						<th class="premium title">PREMIUM</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th class="subtitle">COMPANY FORMATION</th>
					</tr>
					<tr>
						<th>Unlimited Business Name Check</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Document Preparation &amp; Filling</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Company Formation</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>All Government fees in first years</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Local Company Secretary for 1st years</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Local Registered Address for first year included mails handle</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Significant Controller Register and Designated Representative</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Digital coporate documents</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Digital seal</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>One set of documents certified by CPA</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th class="subtitle">BANK ACCOUNT APPLICATION</th>
					</tr>
					<tr>
						<th>Assistance in opening Bank account including Cert. of Incumbency if required</th>
						<td class="basic">None </td>
						<td class="standard">1 bank application</td>
						<td class="premium">Up to 5 bank applications</td>
					</tr>
				</tbody>
			`
      break
    // singapore
    case 191:
      if (tab == 1) {
        content = `
				<thead>
					<tr>
						<th></th>
						<th class="basic title">Local Lite</th>
						<th class="standard title">Local Standard</th>
						<th class="premium title">Foreigner Basic</th>
						<th class="ultra title">Foreigner Ultra</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th class="subtitle">COMPANY FORMATION</th>
					</tr>
					<tr>
						<th>Unlimited Name Availability Check</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Document Preparation &amp; Filling</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Company Incorporation Process</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Company Name Reservation</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Government Registration Fee</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
			
					<tr>
						<th>Lifetime Support/ Instant Response</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Digital Corporate Documents</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th><span class="subtitle">Company Secretary</span> (1 year)</th>
					</tr>
					<tr>
						<th>Annual filing and AGM preparation</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Annual filing government fee</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Local Registered Address with mail handling</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th class="subtitle">PREMIUM COMPANY SET</th>
					</tr>
					<tr>
						<th>Company kit</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Company stamp</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Courier fee</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th><span class="subtitle">Nominee Director</span> (No deposit required)</th>
						<td>None</td>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th class="subtitle">BANKING SUPPORT</th>
					</tr>
					<tr>
						<th>Bank account opening assistance with<br/> Singapore banks in our supported banks list</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th class="subtitle">WORK PASS</th>
					</tr>
					<tr>
						<th>Application of Employment Pass</th>
						<td>None </td>
						<td>None</td>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th class="subtitle">REQUIREMENT FOR NOMINEE SERVICE</th>
					</tr>
					<tr>
						<th>
							* 2 options:<br>
							1. Nominee review US$22/month billed yearly<br>
							2. Accounting package from US$84/month<br> billed yearly:
							<ul class="list">
								<li>Xero cloud accounting</li>
								<li>Corppass registration </li>
								<li>Monthly accounting review</li>
								<li>Monthly preparation of FSs</li>
								<li>Annual tax filing (preparation and filing of ECI and Form C/C-S)</li>
								<li>Annual revenue under S$70k (plan upgradable)</li>
							</ul>
						</th>
						<td>None </td>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
				</tbody>
			`
      } else {
        content = `
				<thead>
					<tr>
						<th></th>
						<th class="basic title">Local Lite</th>
						<th class="standard title">Local Standard</th>
						<th class="premium title">Foreigner Basic</th>
						<th class="ultra title">Foreigner Ultra</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th><span class="subtitle">COMPANY SECRETARY</span> <span class="brand_800">(1 year)</span></th>
					</tr>
					<tr>
						<th>Annual filing and AGM preparation</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Annual filing government fee</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Local Registered Address with mail handling</th>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th><span class="subtitle">NOMINEE DIRECTOR</span> <span class="brand_800">(No deposit required)</span></th>
						<td>None</td>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td>None</td>
					</tr>
					<tr>
						<th class="subtitle">REQUIREMENT FOR NOMINEE SERVICE</th>
					</tr>
					<tr>
						<th>
							* 2 options:<br>
							1. Nominee review US$22/month billed yearly<br>
							2. Accounting package from US$84/month billed yearly:
							<ul class="list">
								<li>Xero cloud accounting</li>
								<li>Corppass registration </li>
								<li>Monthly accounting review</li>
								<li>Monthly preparation of FSs</li>
								<li>Annual tax filing (preparation and filing of ECI <br>and Form C/C-S)</li>
								<li>Annual revenue under S$70k (plan upgradable)</li>
							</ul>
						</th>
						<td>None </td>
						<td>None</td>
						<td><i class="itemCheck"></i></td>
						<td>None</td>
					</tr>
				</tbody>
			`
      }
      break
    // delaware
    case 250:
      content = `
					<thead>
						<tr>
							<th></th>
							<th class="basic title">
								<p>BASIC</p>
								<p class="des">Delaware company</p>
							</th>
							<th class="standard title large">
								<p>STANDARD</p>
								<p class="des">Delaware company w/ supporting documents to open bank account</p>
							</th>
							<th class="premium title">
								<p>PREMIUM</p>
								<p class="des">Delaware company w/ Corporate Kit</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th class="subtitle">COMPANY FORMATION</th>
						</tr>
						<tr>
							<th>Name check and clearance</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Document Preparation &amp; Filing</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>State filing fee</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Certificate of Formation / Incorporation</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>1 year registered agent</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>1 year local registered address</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Digital corporate docs</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Digital company seal</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Operating Agreements/Bylaws
								<p class="des">Required to open US bank account</p>
							</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Lifetime support with Dedicated Relationship Manager</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>EIN application (Employer identification number)
								<p class="des">Required to open US bank account and employ local labor, bank account, employ labour, file and pay tax</p>
							</th>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Physical LLC/Corporate Kit with:
								<ul>
									<li>Gold Embossed Binder</li>
									<li>Company Guidebook</li>
									<li>Operating Agreement/By-laws</li>
									<li>Meeting Minute Book</li>
									<li>Organizational Resolutions</li>
									<li>Membership/Stock Certificates</li>
									<li>Membership/Stock Ledger</li>
									<li>Corporate Seal</li>
								</ul>
							</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>International courier fee</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Certified COF/COI with Gold Seal or with Apostille</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Notarized Statement of Authorized Person</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Bank Resolution Form</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>LLC/Corporation Essential Documents</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th class="subtitle">EXPRESS FORMATION</th>
						</tr>
						<tr>
							<th>Expedited filing within 24 hours</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th class="subtitle">BUSINESS ACCOUNT</th>
						</tr>
						<tr>
							<th>Wise/Payoneer/Mercury business banking</th>
							<td class="basic">None</td>
							<td class="standard"><i class="itemCheck"></i></td>
							<td class="premium"><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th class="subtitle">MERCHANT ACCOUNT</th>
						</tr>
						<tr>
							<th>Guideline on Applying Merchant Account</th>
							<td class="basic">None</td>
							<td class="standard"><i class="itemCheck"></i></td>
							<td class="premium"><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th class="subtitle">PRIVILEGES FROM TAXHUB </th>
						</tr>
						<tr>
						<th>
							<ul>
								<li>10% discount code</li>
								<li>Free 30-min CPA consultation</li>
							</ul>
						</th>
						<td class="basic"><i class="itemCheck"></i></td>
						<td class="standard"><i class="itemCheck"></i></td>
						<td class="premium"><i class="itemCheck"></i></td>
						</tr>
					</tbody>
				`
      break
    // vietnam
    case 244:
      if (parseInt(entity_type_id) === 14) {
        // branch
        content = `
					<thead>
						<tr>
							<th></th>
							<th class="premium title">Branch
								<p class="des">Establishment of a Branch</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Name availability check</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Document Preparation &amp; Filing</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Business/Enterprise Registration Certificate (ERC)</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Investment Registration Certificate (IRC)</th>
							<td>None</td>
						</tr>
						<tr>
							<th>Local registered address for 1st year</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Public announcement of company registration</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Tax registration after incorporation</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Company seal</th>
							<td>None</td>
						</tr>
					</tbody>
				`
      } else if (parseInt(entity_type_id) === 15) {
        content = `
					<thead>
						<tr>
							<th></th>
							<th class="ro title">RO
								<p class="des">Establishment of a Representative Office</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Name availability check</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Document Preparation &amp; Filing</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Business/Enterprise Registration Certificate (ERC)</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Investment Registration Certificate (IRC)</th>
							<td>None</td>
						</tr>
						<tr>
							<th>Local registered address for 1st year</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Public announcement of company registration</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Tax registration after incorporation</th>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Company seal</th>
							<td><i class="itemCheck"></i></td>
						</tr>
					</tbody>
				`
      } else {
        content = `
					<thead>
						<tr>
							<th></th>
							<th class="basic title">JVC
								<p class="des">Establishment of a Joint Venture Company (FII)</p>
							</th>
							<th class="standard title">WFOE
								<p class="des">Establishment of a Wholly-Owned Foreign Enterprise (LLC/JSC)</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Name availability check</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Document Preparation &amp; Filing</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Business/Enterprise Registration Certificate (ERC)</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Investment Registration Certificate (IRC)</th>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Local registered address for 1st year</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Public announcement of company registration</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Tax registration after incorporation</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Company seal</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
					</tbody>
				`
      }
      break
    // UK
    case 237:
      if (parseInt(entity_type_id) === 7) {
        // Entitty type LLP
        content = `
					<thead>
						<tr>
							<th></th>
							<th class="basic title">BASIC</th>
							<th class="standard title">STANDARD</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th class="subtitle">COMPANY FORMATION</th>
						</tr>
						<tr>
							<th>Name availability check</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Government filing fee</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>01 year registered address</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>01 year service address<p class="des">Applicable to 02 members only</p></th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>01 year business address</th>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>
								Digital company docs
								<ul>
									<li>Copies of COI, M&AA and Share certificates</li>
									<li>Copy of company register</li>
								</ul>
							</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>
								Printed company docs
								<ul>
									<li>Printed COI & share certificates</li>
									<li>Printed & Bound M&AA</li>
								</ul>
							</th>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>International courier fee</th>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th class="subtitle">BUSINESS ACCOUNT</th>
						</tr>
						<tr>
							<th>Multi-currency business account with Wise/Payoneer</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
					</tbody>
				`
      } else {
        // Entitty type LTD: offshore
        content = `
					<thead>
						<tr>
							<th></th>
							<th class="basic title">BASIC</th>
							<th class="standard title">STANDARD</th>
							<th class="premium title">PREMIUM</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th class="subtitle">COMPANY FORMATION</th>
						</tr>
						<tr>
							<th>Name availability check</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Government filing fee</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>01 year registered address</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>01 year service address <p class="des"><em>Applicable to 01 member only</em></p></th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>01 year business address</th>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>
								Digital company docs
								<ul>
									<li>Copies of COI, M&AA and Share certificates</li>
									<li>Copy of company register</li>
								</ul>
							</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>
								Printed company docs
								<ul>
									<li>Printed COI & share certificates</li>
									<li>Printed & Bound M&AA</li>
								</ul>
							</th>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>International courier fee</th>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>VAT registration</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th>Free company cancellation within 12 months</th>
							<td>None</td>
							<td>None</td>
							<td><i class="itemCheck"></i></td>
						</tr>
						<tr>
							<th class="subtitle">BUSINESS ACCOUNT</th>
						</tr>
						<tr>
							<th>Multi-currency business account with Wise/Payoneer</th>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
							<td><i class="itemCheck"></i></td>
						</tr>
					</tbody>
				`
      }
      break
    //Cyprus
    case 58:
      content = `
				<thead>
					<tr>
						<th></th>
						<th class="basic title">BASIC</th>
						<th class="standard title">STANDARD</th>
						<th class="premium title">PREMIUM</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th class="subtitle">COMPANY FORMATION</th>
					</tr>
					<tr>
						<th>Free 1st Name Availability Check</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Document Preparation &amp; Filling</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Company Formation</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Local Company Secretary for 1st year</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Local Registered Address for 1st year</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Digital corporate documents</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th class="subtitle">BANK ACCOUNT APPLICATION</th>
					</tr>
					<tr>
						<th>Assistance in opening Bank account including Cert. of Incumbency if required</th>
						<td class="basic">None </td>
						<td class="standard">1 bank application</td>
						<td class="premium">Up to 5 bank applications</td>
					</tr>
				</tbody>
			`
      break
    // offshore
    default:
      content = `
				<thead>
					<tr>
						<th></th>
						<th class="basic title">BASIC</th>
						<th class="standard title">STANDARD</th>
						<th class="premium title">PREMIUM</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th class="subtitle">COMPANY FORMATION</th>
					</tr>
					<tr>
						<th>Unlimited Business Name Check</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Document Preparation &amp; Filling</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Company Formation</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Local Company Secretary for 1st year</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Local Registered Address for 1st year</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th>Digital corporate documents</th>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
						<td><i class="itemCheck"></i></td>
					</tr>
					<tr>
						<th class="subtitle">BANK ACCOUNT APPLICATION</th>
					</tr>
					<tr>
						<th>Assistance in opening Bank account including Cert. of Incumbency if required</th>
						<td class="basic">None </td>
						<td class="standard">1 bank application</td>
						<td class="premium">Up to 5 bank applications</td>
					</tr>
				</tbody>
			`
      break
  }
  return content
}

export default function IncorporationPackage(params) {
  useEffect(() => {
    // window.onpopstate = function() {
    //   handleBack();
    // };
    // history.pushState({}, "");
    if (window.history && window.history.pushState) {
      window.history.pushState('forward', null, './incorporation-package')
      window.onpopstate = function () {
        handleBack()
      }
      // history.pushState({}, "");
    }
  }, [])

  /**
   * Data
   */
  const [dataOnboarding, setDataOnboarding] = useState({})
  const [dataPackages, setDataPackages] = useState([])
  const [dataPackagesTmp, setDataPackagesTmp] = useState([])
  const [isVN, setIsVN] = useState(false)
  const [isSing, setIsSing] = useState(false)
  const [isUk, setIsUk] = useState(false)
  const [isDelaware, setIsDelaware] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const dataOnboardingLocalStorage =
      window.localStorage.getItem('data_onboarding')
    if (dataOnboardingLocalStorage) {
      const data = JSON.parse(dataOnboardingLocalStorage)
      setDataOnboarding(data)

      const currentIdCountry = data?.incorporation?.country?.id
      switch (currentIdCountry) {
        case 244:
          setIsVN(true)
          break
        case 191:
          setIsSing(true)
          break
        case 237:
          setIsUk(true)
          break
        case 250:
          setIsDelaware(true)
          break
      }

      if (currentIdCountry == 191) {
        axios
          .get(`https://core.test-lp.bbcincorp.com/api/onboarding/services`, {
            params: {
              country_id: currentIdCountry,
              entity_type_id: data?.incorporation?.entity_type_id,
              website_id: 2,
              package_group_id: 1
            }
          })
          .then((res) => {
            setDataPackagesTmp(res.data.data.Packages)
            let data = res.data.data.Packages
            setDataPackages(data)
          })
      } else {
        axios
          .get(`https://core.test-lp.bbcincorp.com/api/onboarding/services`, {
            params: {
              country_id: currentIdCountry,
              entity_type_id: data?.incorporation?.entity_type_id,
              website_id: 1,
              package_group_id: 1
            }
          })
          .then((res) => {
            setDataPackagesTmp(res.data.data.Packages)
            let data = isVN
              ? res.data.data.Packages.filter(
                  (item, index) => item && item.PackageType.id !== 4
                )
              : res.data.data.Packages
            setDataPackages(data)
          })
      }
    }
  }, [isVN])

  /**
   * Handle
   */
  const [tab, setTab] = useState(1)
  const [isSwitch, setIsSwitch] = useState(false)
  const handleSwitch = (isSwitch) => {
    setIsSwitch(isSwitch)
  }

  const handleClick = (item) => {
    window.localStorage.setItem(
      'data_onboarding',
      JSON.stringify({
        ...dataOnboarding,
        incorporation: {
          ...dataOnboarding?.incorporation,
          package: item
        }
      })
    )
    let customer = JSON.parse(window.localStorage.getItem('customer'))
    if (customer?.signature?.signature) {
      axios.put(
        `https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${customer?.signature?.signature}`,
        {
          package_id: item.id
        }
      )
    }
    // router.push('/incorporation-additional-service')
    location.href = '/incorporation-additional-service'
  }

  const handleBack = () => {
    let customer = JSON.parse(window.localStorage.getItem('customer'))
    delete customer.company_country_id
    delete customer.company_name
    delete customer.entity_type_id
    delete customer.package_id
    window.localStorage.setItem('customer', JSON.stringify(customer))

    // router.push('/incorporation-entity-name-check')
    location.href = '/incorporation-entity-name-check'
  }

  /**
   * Landing to onboarding
   */
  useEffect(() => {
    const customer = JSON.parse(window.localStorage.getItem('customer'))
    if (
      customer?.company_country_id &&
      customer?.entity_type_id &&
      customer?.package_id
    ) {
      let data =
        dataPackagesTmp.length > 0 &&
        dataPackagesTmp.find(
          (item) => item.id === parseInt(customer?.package_id)
        )
      if (data) {
        handleClick(data)
      }
    } else {
      setLoading(false)
    }
  }, [dataOnboarding, dataPackagesTmp])
  const wrapperRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useOnClickOutside(wrapperRef, () => {
    setShow(false)
  })
  return (
    <div>
      <section>
        <div className={`${styles.btn_top_wrapper} ${styles.Header}`}>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <div style={{ flex: '0 0 auto' }}>
              <a
                className={styles.btn_top}
                style={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: 500
                }}
                onClick={handleBack}
              >
                Back
              </a>
            </div>
          </div>
        </div>
        <Title text='Select packages' className={styles.title} />
        <div className={styles.Body}>
          <div className={styles.description_wrapper}>
            <div className={styles.description}>
              <Description>
                Our packages help you fulfill all requirements to register a
                company in the chosen jurisdiction.
                <br />
                All the fees are included in our packages.
              </Description>
            </div>
            <div className={styles.comparison_wrapper}>
              <button
                className={`${styles.button} ${styles.comparison_top}`}
                onClick={handleShow}
              >
                <img src={comparisonImg} alt='bg-left-obd' />
                <div style={{ marginTop: '4px' }}>Comparison table</div>
              </button>
            </div>
          </div>
          {loading ? (
            <div className={styles.loader_wrapper}>
              <BiLoaderAlt className='animate_spin' size={20} />
            </div>
          ) : dataPackages ? (
            <div
              className={styles.package}
              style={{
                maxWidth: `${isSing ? '100%' : '992px'}`
              }}
            >
              <div className={styles.package_container}>
                {dataPackages.map((item, index) => {
                  const packageTypeId = item?.PackageType?.id
                  let id =
                    isVN && packageTypeId === 5 && isSwitch ? 4 : packageTypeId
                  let currentItem = dataPackagesTmp.find(
                    (item) => item.PackageType.id === id
                  )
                  let imgNamePackageVn = `${sanitizeTitle(
                    currentItem.PackageType.name
                  )}.svg`
                  let pacName = isVN
                    ? currentItem.name
                    : currentItem?.PackageType?.name.toLowerCase()
                  let packageName = pacName
                  const price = currentItem?.Services.reduce(
                    (sum, item) => sum + item?.Fee?.value,
                    0
                  )
                  //   let link = currentItem.PackageType.image
                  //     ? currentItem.PackageType.image
                  //     : `/custom-public/onboarding/images/items/${packageName
                  //         .split(' ')
                  //         .join('-')}.png`
                  let link
                  pacName = pacName.split(' ').join('-')
                  let des = ''
                  if (isSing) {
                    switch (pacName) {
                      case 'local-lite':
                        packageName = packageName
                        link = locallite
                        break
                      case 'local-standard':
                        packageName = packageName
                        link = localstandard
                        break
                      case 'foreigner-basic':
                        packageName = packageName
                        link = foreignerbasic
                        break
                      case 'foreigner-ultra':
                        packageName = packageName
                        link = foreignerultra
                        break
                    }
                  } else {
                    switch (pacName) {
                      case 'basic':
                        packageName = packageName
                        link = pacbasic
                        des = 'Easy company formation'
                        break
                      case 'standard':
                        link = pacstandard
                        des = 'with 1 bank application'
                        break
                      case 'premium':
                        packageName = packageName
                        link = pacpremium
                        des = 'Up to 5 bank applications'
                        break
                    }
                  }

                  return (
                    <div
                      className={`${styles.card_wrapper} ${
                        isSing ? styles.card_wrapper_sg : ''
                      } `}
                      key={index}
                    >
                      <div className={styles.card}>
                        {isVN ? (
                          <div>
                            <div
                              className={`${
                                packageTypeId === 5 ? '' : styles.item_height
                              }`}
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleClick(currentItem)}
                            >
                              <div className={styles.content_wrapper_vn}>
                                <img
                                  src={`/onboarding/custom-public/onboarding/images/items/${imgNamePackageVn}`}
                                  className={`w-auto`}
                                  alt={packageName}
                                />
                                <div
                                  className={`${styles.cardPriceVN} font-weight-bold pt-2`}
                                >
                                  US${price}
                                </div>
                                <div className={`${styles.cardNameVN} pt-2`}>
                                  {packageName}
                                </div>
                              </div>
                              {/* {!isVN && (
                              <div className={`${styles.cardIconNext}`}>
                                <span className="mb-1">→</span>
                              </div>
                            )} */}
                            </div>
                            {packageTypeId === 5 && (
                              <div
                                className='p-3'
                                style={{
                                  background: 'rgba(207,207,207,.4)'
                                }}
                              >
                                <div
                                  className={`row align-items-center justify-content-between mx-n1`}
                                >
                                  <div className='col-auto px-1'>
                                    <OverlayTrigger
                                      placement='bottom-start'
                                      overlay={
                                        <Popover
                                          id='popover'
                                          className={`${styles.info}`}
                                        >
                                          <Popover.Content
                                            className='bg-primary rounded'
                                            style={{
                                              maxWidth: '380px',
                                              zIndex: 99
                                            }}
                                          >
                                            <p className='text-white mb-0'>
                                              The price will change depending on
                                              whether company member is an
                                              individual or a corporation.
                                            </p>
                                          </Popover.Content>
                                        </Popover>
                                      }
                                    >
                                      <button className='btn p-0'>
                                        <IconContext.Provider
                                          value={{ color: '#007eff' }}
                                        >
                                          <AiOutlineInfoCircle size='20px' />
                                        </IconContext.Provider>
                                      </button>
                                    </OverlayTrigger>
                                  </div>
                                  <div className='col-auto px-1'>
                                    <div
                                      style={{
                                        fontWeight: 500,
                                        color: '#333',
                                        paddingTop: '2px'
                                      }}
                                    >
                                      Individual
                                    </div>
                                  </div>
                                  <div className='col-auto px-1'>
                                    <Form.Check
                                      type='switch'
                                      id='custom-switch'
                                      className={`${styles.formSwich}`}
                                      onChange={(e) => handleSwitch(!isSwitch)}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div>
                            <div
                              className={`${styles[pacName]} ${styles.card_inside}`}
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleClick(currentItem)}
                            >
                              <div className={styles.img_wrapper}>
                                <img
                                  src={link}
                                  style={{ height: '100%' }}
                                  alt={packageName}
                                />
                                <div className={styles.cardName_wrapper}>
                                  <div className={styles.cardName}>
                                    {packageName}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className={styles.cardPrice}>
                                  US${price}
                                </div>
                                <p className={styles.cardDes}>
                                  {!isSing && !isUk && !isDelaware && des}
                                </p>
                              </div>
                            </div>
                            {/* <div className={`${styles.cardIconNext}`}>
                            <span className="mb-1">→</span>
                          </div> */}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
              {isVN && (
                <div className={styles.note_vn}>
                  <p className={styles.note}>
                    * All listed packages are dedicated to company registration
                    in HCM city only. Company formation in other cities would
                    cost additional fee.
                  </p>
                  <p className={styles.note} style={{ margin: '0' }}>
                    ** Fees for applying sub-licenses fall outside the scope of
                    above packages.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.comparison_bottom_wrapper}>
          <div className={styles.comparison_bottom}>
            <div style={{ flex: '0 0 auto' }}>
              <button
                className={`${styles.button} ${styles.comparison_btn}`}
                onClick={handleShow}
              >
                <div className={styles.comparison_img}>
                  <div style={{ flex: '0 0 auto' }}>
                    <img
                      src={comparisonImg}
                      alt='bg-left-obd'
                      style={{
                        width: '20px'
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flexBasis: '0',
                      flexGrow: '1',
                      maxWidth: '100%',
                      paddingLeft: '8px'
                    }}
                  >
                    Comparison table
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.btn_bottom_wrapper}>
          <div style={{ flex: '0 0 auto' }}>
            <a
              className={styles.btn_back_bottom}
              style={{
                color: '#2c2c51',
                fontWeight: 500
              }}
              onClick={handleBack}
            >
              Back
            </a>
          </div>
        </div>
      </section>
      {/** Modal */}
      <Modal show={show}>
        <div className={styles.modal_wrapper}>
          <div ref={wrapperRef} className={styles.dialog}>
            <div
              className={styles.closeModal}
              style={{
                position: 'absolute',
                top: '0.25rem',
                right: '0.5rem',
                zIndex: 1
              }}
            >
              <button className={styles.close_button} onClick={handleClose}>
                <IconContext.Provider value={{ style: { color: 'c4c4c4' } }}>
                  <IoMdCloseCircle size={`1.5rem`} />
                </IconContext.Provider>
              </button>
            </div>
            <div className='relative'>
              <div className={styles.headerModal}>
                <h3>COMPANY PACKAGE</h3>
              </div>
              <div className={styles.bodyModal}>
                {isSing && (
                  <div className={styles.tab_container}>
                    <div className={styles.tab_wrapper}>
                      <button
                        onClick={() => setTab(1)}
                        className={`${tab === 1 ? styles.active_tab : ''} ${
                          styles.tab_item
                        }`}
                      >
                        Incorporation
                      </button>
                      <button
                        onClick={() => setTab(2)}
                        className={`${tab === 2 ? styles.active_tab : ''} ${
                          styles.tab_item
                        }`}
                      >
                        Renewal
                      </button>
                    </div>
                  </div>
                )}
                <table id='genPopupPackages'>
                  {parse(
                    popupPackages(
                      dataOnboarding?.incorporation?.country?.id,
                      dataOnboarding?.incorporation?.entity_type_id,
                      tab
                    )
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
