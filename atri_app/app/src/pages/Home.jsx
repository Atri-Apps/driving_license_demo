import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useTextBox2Cb, useFlex1Cb, useFlex2Cb, useFlex3Cb, useFlex4Cb, useNavWrapperCb, useImage6Cb, useFlex9Cb, useFlex10Cb, useFlex11Cb, useImage8Cb, useTextBox4Cb, usecurrent_rangeCb, useFlex12Cb, useTextBox6Cb, usetestname_1Cb, useFlex14Cb, usestatus_1Cb, useFlex15Cb, useImage10Cb, usenavtest_1Cb, useFlex16Cb, usecommentnum_1Cb, usecommenticon_1Cb, usetestitem_1Cb, useFlex19Cb, useTextBox9Cb, useImage12Cb, useFlex20Cb, useImage13Cb, useFlex21Cb, useImage14Cb, useTextBox10Cb, useImage15Cb, useTextBox11Cb, useImage16Cb, useFlex25Cb, useTextBox12Cb, useImage17Cb, useFlex26Cb, useImage18Cb, useTextBox13Cb, useImage19Cb, useFlex30Cb, useTextBox14Cb, useImage20Cb, useFlex31Cb, useImage21Cb, useTextBox15Cb, useImage22Cb, useFlex35Cb, useTextBox16Cb, useImage23Cb, useFlex36Cb, useImage24Cb, useTextBox17Cb, useImage25Cb, useFlex40Cb, useTextBox18Cb, useImage26Cb, useFlex41Cb, useImage27Cb, useTextBox19Cb, useImage28Cb, useFlex45Cb, useTextBox20Cb, useImage29Cb, useFlex46Cb, useImage30Cb, useTextBox21Cb, useImage31Cb, useFlex50Cb, useTextBox22Cb, useImage32Cb, useFlex51Cb, useImage33Cb, useTextBox23Cb, useImage34Cb, useFlex55Cb, useTextBox24Cb, useImage35Cb, useFlex56Cb, useImage36Cb, useTextBox25Cb, useImage37Cb, useFlex60Cb, useTextBox26Cb, useImage38Cb, useFlex61Cb, usecommentnum_2Cb, useImage39Cb, usecommenticon_2Cb, usenavtest_2Cb, useFlex66Cb, usestatus_2Cb, usetestname_2Cb, useFlex67Cb, useFlex68Cb, usetestitem_2Cb, usecommentnum_3Cb, useImage42Cb, usecommenticon_3Cb, usenavtest_3Cb, useFlex71Cb, usestatus_3Cb, usetestname_3Cb, useFlex72Cb, useFlex73Cb, usetestitem_3Cb, usecommentnum_4Cb, useImage45Cb, usecommenticon_4Cb, usenavtest_4Cb, useFlex76Cb, usestatus_4Cb, usetestname_4Cb, useFlex77Cb, useFlex78Cb, usetestitem_4Cb, usecommentnum_5Cb, useImage48Cb, usecommenticon_5Cb, usenavtest_5Cb, useFlex81Cb, usestatus_5Cb, usetestname_5Cb, useFlex82Cb, useFlex83Cb, usetestitem_5Cb, usecommentnum_6Cb, useImage51Cb, usecommenticon_6Cb, usenavtest_6Cb, useFlex86Cb, usestatus_6Cb, usetestname_6Cb, useFlex87Cb, useFlex88Cb, usetestitem_6Cb, usecommentnum_7Cb, useImage54Cb, usecommenticon_7Cb, usenavtest_7Cb, useFlex91Cb, usestatus_7Cb, usetestname_7Cb, useFlex92Cb, useFlex93Cb, usetestitem_7Cb, usecommentnum_8Cb, useImage57Cb, usecommenticon_8Cb, usenavtest_8Cb, useFlex96Cb, usestatus_8Cb, usetestname_8Cb, useFlex97Cb, useFlex98Cb, usetestitem_8Cb, usecommentnum_9Cb, useImage60Cb, usecommenticon_9Cb, usenavtest_9Cb, useFlex101Cb, usestatus_9Cb, usetestname_9Cb, useFlex102Cb, useFlex103Cb, usetestitem_9Cb, usecommentnum_10Cb, useImage63Cb, usecommenticon_10Cb, usenavtest_10Cb, useFlex106Cb, usestatus_10Cb, usetestname_10Cb, useFlex107Cb, useFlex108Cb, usetestitem_10Cb, useFlex110Cb, useTextBox45Cb, useTextBox46Cb, useFlex112Cb, useprevCb, useImage66Cb, usenextCb, useImage67Cb, useFlex116Cb, useButton2Cb, useButton3Cb, useButton19Cb, usetotal_testsCb, useTextBox186Cb, useImage150Cb } from "../page-cbs/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const NavWrapperProps = useStore((state)=>state["Home"]["NavWrapper"]);
const NavWrapperIoProps = useIoStore((state)=>state["Home"]["NavWrapper"]);
const NavWrapperCb = useNavWrapperCb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const current_rangeProps = useStore((state)=>state["Home"]["current_range"]);
const current_rangeIoProps = useIoStore((state)=>state["Home"]["current_range"]);
const current_rangeCb = usecurrent_rangeCb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const testname_1Props = useStore((state)=>state["Home"]["testname_1"]);
const testname_1IoProps = useIoStore((state)=>state["Home"]["testname_1"]);
const testname_1Cb = usetestname_1Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const status_1Props = useStore((state)=>state["Home"]["status_1"]);
const status_1IoProps = useIoStore((state)=>state["Home"]["status_1"]);
const status_1Cb = usestatus_1Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const navtest_1Props = useStore((state)=>state["Home"]["navtest_1"]);
const navtest_1IoProps = useIoStore((state)=>state["Home"]["navtest_1"]);
const navtest_1Cb = usenavtest_1Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const commentnum_1Props = useStore((state)=>state["Home"]["commentnum_1"]);
const commentnum_1IoProps = useIoStore((state)=>state["Home"]["commentnum_1"]);
const commentnum_1Cb = usecommentnum_1Cb()
const commenticon_1Props = useStore((state)=>state["Home"]["commenticon_1"]);
const commenticon_1IoProps = useIoStore((state)=>state["Home"]["commenticon_1"]);
const commenticon_1Cb = usecommenticon_1Cb()
const testitem_1Props = useStore((state)=>state["Home"]["testitem_1"]);
const testitem_1IoProps = useIoStore((state)=>state["Home"]["testitem_1"]);
const testitem_1Cb = usetestitem_1Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const commentnum_2Props = useStore((state)=>state["Home"]["commentnum_2"]);
const commentnum_2IoProps = useIoStore((state)=>state["Home"]["commentnum_2"]);
const commentnum_2Cb = usecommentnum_2Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const commenticon_2Props = useStore((state)=>state["Home"]["commenticon_2"]);
const commenticon_2IoProps = useIoStore((state)=>state["Home"]["commenticon_2"]);
const commenticon_2Cb = usecommenticon_2Cb()
const navtest_2Props = useStore((state)=>state["Home"]["navtest_2"]);
const navtest_2IoProps = useIoStore((state)=>state["Home"]["navtest_2"]);
const navtest_2Cb = usenavtest_2Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const status_2Props = useStore((state)=>state["Home"]["status_2"]);
const status_2IoProps = useIoStore((state)=>state["Home"]["status_2"]);
const status_2Cb = usestatus_2Cb()
const testname_2Props = useStore((state)=>state["Home"]["testname_2"]);
const testname_2IoProps = useIoStore((state)=>state["Home"]["testname_2"]);
const testname_2Cb = usetestname_2Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const testitem_2Props = useStore((state)=>state["Home"]["testitem_2"]);
const testitem_2IoProps = useIoStore((state)=>state["Home"]["testitem_2"]);
const testitem_2Cb = usetestitem_2Cb()
const commentnum_3Props = useStore((state)=>state["Home"]["commentnum_3"]);
const commentnum_3IoProps = useIoStore((state)=>state["Home"]["commentnum_3"]);
const commentnum_3Cb = usecommentnum_3Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const commenticon_3Props = useStore((state)=>state["Home"]["commenticon_3"]);
const commenticon_3IoProps = useIoStore((state)=>state["Home"]["commenticon_3"]);
const commenticon_3Cb = usecommenticon_3Cb()
const navtest_3Props = useStore((state)=>state["Home"]["navtest_3"]);
const navtest_3IoProps = useIoStore((state)=>state["Home"]["navtest_3"]);
const navtest_3Cb = usenavtest_3Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const status_3Props = useStore((state)=>state["Home"]["status_3"]);
const status_3IoProps = useIoStore((state)=>state["Home"]["status_3"]);
const status_3Cb = usestatus_3Cb()
const testname_3Props = useStore((state)=>state["Home"]["testname_3"]);
const testname_3IoProps = useIoStore((state)=>state["Home"]["testname_3"]);
const testname_3Cb = usetestname_3Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const testitem_3Props = useStore((state)=>state["Home"]["testitem_3"]);
const testitem_3IoProps = useIoStore((state)=>state["Home"]["testitem_3"]);
const testitem_3Cb = usetestitem_3Cb()
const commentnum_4Props = useStore((state)=>state["Home"]["commentnum_4"]);
const commentnum_4IoProps = useIoStore((state)=>state["Home"]["commentnum_4"]);
const commentnum_4Cb = usecommentnum_4Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const commenticon_4Props = useStore((state)=>state["Home"]["commenticon_4"]);
const commenticon_4IoProps = useIoStore((state)=>state["Home"]["commenticon_4"]);
const commenticon_4Cb = usecommenticon_4Cb()
const navtest_4Props = useStore((state)=>state["Home"]["navtest_4"]);
const navtest_4IoProps = useIoStore((state)=>state["Home"]["navtest_4"]);
const navtest_4Cb = usenavtest_4Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const status_4Props = useStore((state)=>state["Home"]["status_4"]);
const status_4IoProps = useIoStore((state)=>state["Home"]["status_4"]);
const status_4Cb = usestatus_4Cb()
const testname_4Props = useStore((state)=>state["Home"]["testname_4"]);
const testname_4IoProps = useIoStore((state)=>state["Home"]["testname_4"]);
const testname_4Cb = usetestname_4Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const testitem_4Props = useStore((state)=>state["Home"]["testitem_4"]);
const testitem_4IoProps = useIoStore((state)=>state["Home"]["testitem_4"]);
const testitem_4Cb = usetestitem_4Cb()
const commentnum_5Props = useStore((state)=>state["Home"]["commentnum_5"]);
const commentnum_5IoProps = useIoStore((state)=>state["Home"]["commentnum_5"]);
const commentnum_5Cb = usecommentnum_5Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const commenticon_5Props = useStore((state)=>state["Home"]["commenticon_5"]);
const commenticon_5IoProps = useIoStore((state)=>state["Home"]["commenticon_5"]);
const commenticon_5Cb = usecommenticon_5Cb()
const navtest_5Props = useStore((state)=>state["Home"]["navtest_5"]);
const navtest_5IoProps = useIoStore((state)=>state["Home"]["navtest_5"]);
const navtest_5Cb = usenavtest_5Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const status_5Props = useStore((state)=>state["Home"]["status_5"]);
const status_5IoProps = useIoStore((state)=>state["Home"]["status_5"]);
const status_5Cb = usestatus_5Cb()
const testname_5Props = useStore((state)=>state["Home"]["testname_5"]);
const testname_5IoProps = useIoStore((state)=>state["Home"]["testname_5"]);
const testname_5Cb = usetestname_5Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex83Props = useStore((state)=>state["Home"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["Home"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const testitem_5Props = useStore((state)=>state["Home"]["testitem_5"]);
const testitem_5IoProps = useIoStore((state)=>state["Home"]["testitem_5"]);
const testitem_5Cb = usetestitem_5Cb()
const commentnum_6Props = useStore((state)=>state["Home"]["commentnum_6"]);
const commentnum_6IoProps = useIoStore((state)=>state["Home"]["commentnum_6"]);
const commentnum_6Cb = usecommentnum_6Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const commenticon_6Props = useStore((state)=>state["Home"]["commenticon_6"]);
const commenticon_6IoProps = useIoStore((state)=>state["Home"]["commenticon_6"]);
const commenticon_6Cb = usecommenticon_6Cb()
const navtest_6Props = useStore((state)=>state["Home"]["navtest_6"]);
const navtest_6IoProps = useIoStore((state)=>state["Home"]["navtest_6"]);
const navtest_6Cb = usenavtest_6Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const status_6Props = useStore((state)=>state["Home"]["status_6"]);
const status_6IoProps = useIoStore((state)=>state["Home"]["status_6"]);
const status_6Cb = usestatus_6Cb()
const testname_6Props = useStore((state)=>state["Home"]["testname_6"]);
const testname_6IoProps = useIoStore((state)=>state["Home"]["testname_6"]);
const testname_6Cb = usetestname_6Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const testitem_6Props = useStore((state)=>state["Home"]["testitem_6"]);
const testitem_6IoProps = useIoStore((state)=>state["Home"]["testitem_6"]);
const testitem_6Cb = usetestitem_6Cb()
const commentnum_7Props = useStore((state)=>state["Home"]["commentnum_7"]);
const commentnum_7IoProps = useIoStore((state)=>state["Home"]["commentnum_7"]);
const commentnum_7Cb = usecommentnum_7Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const commenticon_7Props = useStore((state)=>state["Home"]["commenticon_7"]);
const commenticon_7IoProps = useIoStore((state)=>state["Home"]["commenticon_7"]);
const commenticon_7Cb = usecommenticon_7Cb()
const navtest_7Props = useStore((state)=>state["Home"]["navtest_7"]);
const navtest_7IoProps = useIoStore((state)=>state["Home"]["navtest_7"]);
const navtest_7Cb = usenavtest_7Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const status_7Props = useStore((state)=>state["Home"]["status_7"]);
const status_7IoProps = useIoStore((state)=>state["Home"]["status_7"]);
const status_7Cb = usestatus_7Cb()
const testname_7Props = useStore((state)=>state["Home"]["testname_7"]);
const testname_7IoProps = useIoStore((state)=>state["Home"]["testname_7"]);
const testname_7Cb = usetestname_7Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const testitem_7Props = useStore((state)=>state["Home"]["testitem_7"]);
const testitem_7IoProps = useIoStore((state)=>state["Home"]["testitem_7"]);
const testitem_7Cb = usetestitem_7Cb()
const commentnum_8Props = useStore((state)=>state["Home"]["commentnum_8"]);
const commentnum_8IoProps = useIoStore((state)=>state["Home"]["commentnum_8"]);
const commentnum_8Cb = usecommentnum_8Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const commenticon_8Props = useStore((state)=>state["Home"]["commenticon_8"]);
const commenticon_8IoProps = useIoStore((state)=>state["Home"]["commenticon_8"]);
const commenticon_8Cb = usecommenticon_8Cb()
const navtest_8Props = useStore((state)=>state["Home"]["navtest_8"]);
const navtest_8IoProps = useIoStore((state)=>state["Home"]["navtest_8"]);
const navtest_8Cb = usenavtest_8Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const status_8Props = useStore((state)=>state["Home"]["status_8"]);
const status_8IoProps = useIoStore((state)=>state["Home"]["status_8"]);
const status_8Cb = usestatus_8Cb()
const testname_8Props = useStore((state)=>state["Home"]["testname_8"]);
const testname_8IoProps = useIoStore((state)=>state["Home"]["testname_8"]);
const testname_8Cb = usetestname_8Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const testitem_8Props = useStore((state)=>state["Home"]["testitem_8"]);
const testitem_8IoProps = useIoStore((state)=>state["Home"]["testitem_8"]);
const testitem_8Cb = usetestitem_8Cb()
const commentnum_9Props = useStore((state)=>state["Home"]["commentnum_9"]);
const commentnum_9IoProps = useIoStore((state)=>state["Home"]["commentnum_9"]);
const commentnum_9Cb = usecommentnum_9Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const commenticon_9Props = useStore((state)=>state["Home"]["commenticon_9"]);
const commenticon_9IoProps = useIoStore((state)=>state["Home"]["commenticon_9"]);
const commenticon_9Cb = usecommenticon_9Cb()
const navtest_9Props = useStore((state)=>state["Home"]["navtest_9"]);
const navtest_9IoProps = useIoStore((state)=>state["Home"]["navtest_9"]);
const navtest_9Cb = usenavtest_9Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const status_9Props = useStore((state)=>state["Home"]["status_9"]);
const status_9IoProps = useIoStore((state)=>state["Home"]["status_9"]);
const status_9Cb = usestatus_9Cb()
const testname_9Props = useStore((state)=>state["Home"]["testname_9"]);
const testname_9IoProps = useIoStore((state)=>state["Home"]["testname_9"]);
const testname_9Cb = usetestname_9Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const testitem_9Props = useStore((state)=>state["Home"]["testitem_9"]);
const testitem_9IoProps = useIoStore((state)=>state["Home"]["testitem_9"]);
const testitem_9Cb = usetestitem_9Cb()
const commentnum_10Props = useStore((state)=>state["Home"]["commentnum_10"]);
const commentnum_10IoProps = useIoStore((state)=>state["Home"]["commentnum_10"]);
const commentnum_10Cb = usecommentnum_10Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const commenticon_10Props = useStore((state)=>state["Home"]["commenticon_10"]);
const commenticon_10IoProps = useIoStore((state)=>state["Home"]["commenticon_10"]);
const commenticon_10Cb = usecommenticon_10Cb()
const navtest_10Props = useStore((state)=>state["Home"]["navtest_10"]);
const navtest_10IoProps = useIoStore((state)=>state["Home"]["navtest_10"]);
const navtest_10Cb = usenavtest_10Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const status_10Props = useStore((state)=>state["Home"]["status_10"]);
const status_10IoProps = useIoStore((state)=>state["Home"]["status_10"]);
const status_10Cb = usestatus_10Cb()
const testname_10Props = useStore((state)=>state["Home"]["testname_10"]);
const testname_10IoProps = useIoStore((state)=>state["Home"]["testname_10"]);
const testname_10Cb = usetestname_10Cb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const testitem_10Props = useStore((state)=>state["Home"]["testitem_10"]);
const testitem_10IoProps = useIoStore((state)=>state["Home"]["testitem_10"]);
const testitem_10Cb = usetestitem_10Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const prevProps = useStore((state)=>state["Home"]["prev"]);
const prevIoProps = useIoStore((state)=>state["Home"]["prev"]);
const prevCb = useprevCb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const nextProps = useStore((state)=>state["Home"]["next"]);
const nextIoProps = useIoStore((state)=>state["Home"]["next"]);
const nextCb = usenextCb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button19Props = useStore((state)=>state["Home"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Home"]["Button19"]);
const Button19Cb = useButton19Cb()
const total_testsProps = useStore((state)=>state["Home"]["total_tests"]);
const total_testsIoProps = useIoStore((state)=>state["Home"]["total_tests"]);
const total_testsCb = usetotal_testsCb()
const TextBox186Props = useStore((state)=>state["Home"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["Home"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const Image150Props = useStore((state)=>state["Home"]["Image150"]);
const Image150IoProps = useIoStore((state)=>state["Home"]["Image150"]);
const Image150Cb = useImage150Cb()

  return (<>
  <Flex {...NavWrapperProps} {...NavWrapperCb} {...NavWrapperIoProps}>
<Flex {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Flex {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Image {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex>
<Flex {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
</Flex>
<Flex {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Button {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
<Image {...Image150Props} {...Image150Cb} {...Image150IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Image {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Flex>
<Flex {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<Flex {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Flex {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<TextBox {...current_rangeProps} {...current_rangeCb} {...current_rangeIoProps}/>
<TextBox {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<TextBox {...total_testsProps} {...total_testsCb} {...total_testsIoProps}/>
<TextBox {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
<Flex {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Flex {...prevProps} {...prevCb} {...prevIoProps}>
<Image {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
<TextBox {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex>
<Flex {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Button {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
<Flex {...nextProps} {...nextCb} {...nextIoProps}>
<TextBox {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<Image {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex {...testitem_1Props} {...testitem_1Cb} {...testitem_1IoProps}>
<Flex {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image {...status_1Props} {...status_1Cb} {...status_1IoProps}/>
<TextBox {...testname_1Props} {...testname_1Cb} {...testname_1IoProps}/>
</Flex>
<Flex {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Flex {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Flex {...commenticon_1Props} {...commenticon_1Cb} {...commenticon_1IoProps}>
<Image {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox {...commentnum_1Props} {...commentnum_1Cb} {...commentnum_1IoProps}/>
</Flex>
<Image {...navtest_1Props} {...navtest_1Cb} {...navtest_1IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_2Props} {...testitem_2Cb} {...testitem_2IoProps}>
<Flex {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Image {...status_2Props} {...status_2Cb} {...status_2IoProps}/>
<TextBox {...testname_2Props} {...testname_2Cb} {...testname_2IoProps}/>
</Flex>
<Flex {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Flex {...commenticon_2Props} {...commenticon_2Cb} {...commenticon_2IoProps}>
<Image {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<TextBox {...commentnum_2Props} {...commentnum_2Cb} {...commentnum_2IoProps}/>
</Flex>
<Image {...navtest_2Props} {...navtest_2Cb} {...navtest_2IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_3Props} {...testitem_3Cb} {...testitem_3IoProps}>
<Flex {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Image {...status_3Props} {...status_3Cb} {...status_3IoProps}/>
<TextBox {...testname_3Props} {...testname_3Cb} {...testname_3IoProps}/>
</Flex>
<Flex {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Flex {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Flex {...commenticon_3Props} {...commenticon_3Cb} {...commenticon_3IoProps}>
<Image {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox {...commentnum_3Props} {...commentnum_3Cb} {...commentnum_3IoProps}/>
</Flex>
<Image {...navtest_3Props} {...navtest_3Cb} {...navtest_3IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_4Props} {...testitem_4Cb} {...testitem_4IoProps}>
<Flex {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image {...status_4Props} {...status_4Cb} {...status_4IoProps}/>
<TextBox {...testname_4Props} {...testname_4Cb} {...testname_4IoProps}/>
</Flex>
<Flex {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Flex {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Flex {...commenticon_4Props} {...commenticon_4Cb} {...commenticon_4IoProps}>
<Image {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox {...commentnum_4Props} {...commentnum_4Cb} {...commentnum_4IoProps}/>
</Flex>
<Image {...navtest_4Props} {...navtest_4Cb} {...navtest_4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_5Props} {...testitem_5Cb} {...testitem_5IoProps}>
<Flex {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Image {...status_5Props} {...status_5Cb} {...status_5IoProps}/>
<TextBox {...testname_5Props} {...testname_5Cb} {...testname_5IoProps}/>
</Flex>
<Flex {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Flex {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Flex {...commenticon_5Props} {...commenticon_5Cb} {...commenticon_5IoProps}>
<Image {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<TextBox {...commentnum_5Props} {...commentnum_5Cb} {...commentnum_5IoProps}/>
</Flex>
<Image {...navtest_5Props} {...navtest_5Cb} {...navtest_5IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_6Props} {...testitem_6Cb} {...testitem_6IoProps}>
<Flex {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Image {...status_6Props} {...status_6Cb} {...status_6IoProps}/>
<TextBox {...testname_6Props} {...testname_6Cb} {...testname_6IoProps}/>
</Flex>
<Flex {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Flex {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Flex {...commenticon_6Props} {...commenticon_6Cb} {...commenticon_6IoProps}>
<Image {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<TextBox {...commentnum_6Props} {...commentnum_6Cb} {...commentnum_6IoProps}/>
</Flex>
<Image {...navtest_6Props} {...navtest_6Cb} {...navtest_6IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_7Props} {...testitem_7Cb} {...testitem_7IoProps}>
<Flex {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Image {...status_7Props} {...status_7Cb} {...status_7IoProps}/>
<TextBox {...testname_7Props} {...testname_7Cb} {...testname_7IoProps}/>
</Flex>
<Flex {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Flex {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<Flex {...commenticon_7Props} {...commenticon_7Cb} {...commenticon_7IoProps}>
<Image {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<TextBox {...commentnum_7Props} {...commentnum_7Cb} {...commentnum_7IoProps}/>
</Flex>
<Image {...navtest_7Props} {...navtest_7Cb} {...navtest_7IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_8Props} {...testitem_8Cb} {...testitem_8IoProps}>
<Flex {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Image {...status_8Props} {...status_8Cb} {...status_8IoProps}/>
<TextBox {...testname_8Props} {...testname_8Cb} {...testname_8IoProps}/>
</Flex>
<Flex {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Flex {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Flex {...commenticon_8Props} {...commenticon_8Cb} {...commenticon_8IoProps}>
<Image {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<TextBox {...commentnum_8Props} {...commentnum_8Cb} {...commentnum_8IoProps}/>
</Flex>
<Image {...navtest_8Props} {...navtest_8Cb} {...navtest_8IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_9Props} {...testitem_9Cb} {...testitem_9IoProps}>
<Flex {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Image {...status_9Props} {...status_9Cb} {...status_9IoProps}/>
<TextBox {...testname_9Props} {...testname_9Cb} {...testname_9IoProps}/>
</Flex>
<Flex {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Flex {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<Flex {...commenticon_9Props} {...commenticon_9Cb} {...commenticon_9IoProps}>
<Image {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<TextBox {...commentnum_9Props} {...commentnum_9Cb} {...commentnum_9IoProps}/>
</Flex>
<Image {...navtest_9Props} {...navtest_9Cb} {...navtest_9IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...testitem_10Props} {...testitem_10Cb} {...testitem_10IoProps}>
<Flex {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Image {...status_10Props} {...status_10Cb} {...status_10IoProps}/>
<TextBox {...testname_10Props} {...testname_10Cb} {...testname_10IoProps}/>
</Flex>
<Flex {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Flex {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Flex {...commenticon_10Props} {...commenticon_10Cb} {...commenticon_10IoProps}>
<Image {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
<TextBox {...commentnum_10Props} {...commentnum_10Cb} {...commentnum_10IoProps}/>
</Flex>
<Image {...navtest_10Props} {...navtest_10Cb} {...navtest_10IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Button {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
  </>);
}
