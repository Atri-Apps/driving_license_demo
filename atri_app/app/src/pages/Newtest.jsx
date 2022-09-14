import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Upload } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { useButton17Cb, useTextBox107Cb, useTextBox108Cb, useImage112Cb, useImage113Cb, useTextBox109Cb, useButton18Cb, useFlex231Cb, useFlex232Cb, useFlex233Cb, useFlex234Cb, useFlex235Cb, useFlex236Cb, useTextBox111Cb, useTextBox112Cb, useUpload1Cb, useFlex237Cb, useImage114Cb, useimage_placeholderCb, useruntestCb, useTextBox113Cb, useImage115Cb, usepreviewCb, usepreview_wrapperCb, usefilenameCb, useFlex370Cb, useImage152Cb } from "../page-cbs/newtest";

export default function Newtest() {
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
    setEffectivePropsForPage("newtest")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("newtest")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Button17Props = useStore((state)=>state["newtest"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["newtest"]["Button17"]);
const Button17Cb = useButton17Cb()
const TextBox107Props = useStore((state)=>state["newtest"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["newtest"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["newtest"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["newtest"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Image112Props = useStore((state)=>state["newtest"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["newtest"]["Image112"]);
const Image112Cb = useImage112Cb()
const Image113Props = useStore((state)=>state["newtest"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["newtest"]["Image113"]);
const Image113Cb = useImage113Cb()
const TextBox109Props = useStore((state)=>state["newtest"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["newtest"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Button18Props = useStore((state)=>state["newtest"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["newtest"]["Button18"]);
const Button18Cb = useButton18Cb()
const Flex231Props = useStore((state)=>state["newtest"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["newtest"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex232Props = useStore((state)=>state["newtest"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["newtest"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex233Props = useStore((state)=>state["newtest"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["newtest"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Flex234Props = useStore((state)=>state["newtest"]["Flex234"]);
const Flex234IoProps = useIoStore((state)=>state["newtest"]["Flex234"]);
const Flex234Cb = useFlex234Cb()
const Flex235Props = useStore((state)=>state["newtest"]["Flex235"]);
const Flex235IoProps = useIoStore((state)=>state["newtest"]["Flex235"]);
const Flex235Cb = useFlex235Cb()
const Flex236Props = useStore((state)=>state["newtest"]["Flex236"]);
const Flex236IoProps = useIoStore((state)=>state["newtest"]["Flex236"]);
const Flex236Cb = useFlex236Cb()
const TextBox111Props = useStore((state)=>state["newtest"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["newtest"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["newtest"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["newtest"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Upload1Props = useStore((state)=>state["newtest"]["Upload1"]);
const Upload1IoProps = useIoStore((state)=>state["newtest"]["Upload1"]);
const Upload1Cb = useUpload1Cb()
const Flex237Props = useStore((state)=>state["newtest"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["newtest"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const Image114Props = useStore((state)=>state["newtest"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["newtest"]["Image114"]);
const Image114Cb = useImage114Cb()
const image_placeholderProps = useStore((state)=>state["newtest"]["image_placeholder"]);
const image_placeholderIoProps = useIoStore((state)=>state["newtest"]["image_placeholder"]);
const image_placeholderCb = useimage_placeholderCb()
const runtestProps = useStore((state)=>state["newtest"]["runtest"]);
const runtestIoProps = useIoStore((state)=>state["newtest"]["runtest"]);
const runtestCb = useruntestCb()
const TextBox113Props = useStore((state)=>state["newtest"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["newtest"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const Image115Props = useStore((state)=>state["newtest"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["newtest"]["Image115"]);
const Image115Cb = useImage115Cb()
const previewProps = useStore((state)=>state["newtest"]["preview"]);
const previewIoProps = useIoStore((state)=>state["newtest"]["preview"]);
const previewCb = usepreviewCb()
const preview_wrapperProps = useStore((state)=>state["newtest"]["preview_wrapper"]);
const preview_wrapperIoProps = useIoStore((state)=>state["newtest"]["preview_wrapper"]);
const preview_wrapperCb = usepreview_wrapperCb()
const filenameProps = useStore((state)=>state["newtest"]["filename"]);
const filenameIoProps = useIoStore((state)=>state["newtest"]["filename"]);
const filenameCb = usefilenameCb()
const Flex370Props = useStore((state)=>state["newtest"]["Flex370"]);
const Flex370IoProps = useIoStore((state)=>state["newtest"]["Flex370"]);
const Flex370Cb = useFlex370Cb()
const Image152Props = useStore((state)=>state["newtest"]["Image152"]);
const Image152IoProps = useIoStore((state)=>state["newtest"]["Image152"]);
const Image152Cb = useImage152Cb()

  return (<>
  <Flex2 {...Flex235Props} {...Flex235Cb} {...Flex235IoProps}>
<Flex2 {...Flex234Props} {...Flex234Cb} {...Flex234IoProps}>
<Flex2 {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<Image2 {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
</Flex2>
<Flex2 {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<TextBox2 {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
</Flex2>
<Flex2 {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<Button2 {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
<Image2 {...Image152Props} {...Image152Cb} {...Image152IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 {...Flex236Props} {...Flex236Cb} {...Flex236IoProps}>
<TextBox2 {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<Flex2 {...Flex370Props} {...Flex370Cb} {...Flex370IoProps}>
<TextBox2 {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox2 {...filenameProps} {...filenameCb} {...filenameIoProps}/>
</Flex2>
<Flex2 {...image_placeholderProps} {...image_placeholderCb} {...image_placeholderIoProps}>
<Flex2 {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<Image2 {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
<Upload {...Upload1Props} {...Upload1Cb} {...Upload1IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...preview_wrapperProps} {...preview_wrapperCb} {...preview_wrapperIoProps}>
<Image2 {...previewProps} {...previewCb} {...previewIoProps}/>
</Flex2>
<Flex2 {...runtestProps} {...runtestCb} {...runtestIoProps}>
<Image2 {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
<TextBox2 {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
</Flex2>
</Flex2>
  </>);
}
