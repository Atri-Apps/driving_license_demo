import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button4 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex345Cb, useImage142Cb, useFlex346Cb, useImage145Cb, useFlex348Cb, useTextBox178Cb, useTextBox179Cb, useFlex349Cb, useTextBox181Cb, useusernameCb, useFlex351Cb, usepasswordCb, useTextBox183Cb, useFlex352Cb, useButton48Cb, useFlex353Cb, useerrorboxCb, useerrorwrapperCb } from "../page-cbs/login";

export default function Login() {
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
    setEffectivePropsForPage("login")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("login")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Flex345Props = useStore((state)=>state["login"]["Flex345"]);
const Flex345IoProps = useIoStore((state)=>state["login"]["Flex345"]);
const Flex345Cb = useFlex345Cb()
const Image142Props = useStore((state)=>state["login"]["Image142"]);
const Image142IoProps = useIoStore((state)=>state["login"]["Image142"]);
const Image142Cb = useImage142Cb()
const Flex346Props = useStore((state)=>state["login"]["Flex346"]);
const Flex346IoProps = useIoStore((state)=>state["login"]["Flex346"]);
const Flex346Cb = useFlex346Cb()
const Image145Props = useStore((state)=>state["login"]["Image145"]);
const Image145IoProps = useIoStore((state)=>state["login"]["Image145"]);
const Image145Cb = useImage145Cb()
const Flex348Props = useStore((state)=>state["login"]["Flex348"]);
const Flex348IoProps = useIoStore((state)=>state["login"]["Flex348"]);
const Flex348Cb = useFlex348Cb()
const TextBox178Props = useStore((state)=>state["login"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["login"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["login"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["login"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Flex349Props = useStore((state)=>state["login"]["Flex349"]);
const Flex349IoProps = useIoStore((state)=>state["login"]["Flex349"]);
const Flex349Cb = useFlex349Cb()
const TextBox181Props = useStore((state)=>state["login"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["login"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const usernameProps = useStore((state)=>state["login"]["username"]);
const usernameIoProps = useIoStore((state)=>state["login"]["username"]);
const usernameCb = useusernameCb()
const Flex351Props = useStore((state)=>state["login"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["login"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const passwordProps = useStore((state)=>state["login"]["password"]);
const passwordIoProps = useIoStore((state)=>state["login"]["password"]);
const passwordCb = usepasswordCb()
const TextBox183Props = useStore((state)=>state["login"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["login"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const Flex352Props = useStore((state)=>state["login"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["login"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Button48Props = useStore((state)=>state["login"]["Button48"]);
const Button48IoProps = useIoStore((state)=>state["login"]["Button48"]);
const Button48Cb = useButton48Cb()
const Flex353Props = useStore((state)=>state["login"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["login"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const errorboxProps = useStore((state)=>state["login"]["errorbox"]);
const errorboxIoProps = useIoStore((state)=>state["login"]["errorbox"]);
const errorboxCb = useerrorboxCb()
const errorwrapperProps = useStore((state)=>state["login"]["errorwrapper"]);
const errorwrapperIoProps = useIoStore((state)=>state["login"]["errorwrapper"]);
const errorwrapperCb = useerrorwrapperCb()

  return (<>
  <Flex4 {...Flex345Props} {...Flex345Cb} {...Flex345IoProps}>
<Image4 {...Image142Props} {...Image142Cb} {...Image142IoProps}/>
<Flex4 {...Flex346Props} {...Flex346Cb} {...Flex346IoProps}>
<Image4 {...Image145Props} {...Image145Cb} {...Image145IoProps}/>
<Flex4 {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<Flex4 {...Flex348Props} {...Flex348Cb} {...Flex348IoProps}>
<TextBox4 {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<TextBox4 {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<Flex4 {...errorwrapperProps} {...errorwrapperCb} {...errorwrapperIoProps}>
<TextBox4 {...errorboxProps} {...errorboxCb} {...errorboxIoProps}/>
</Flex4>
<Flex4 {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<Flex4 {...Flex349Props} {...Flex349Cb} {...Flex349IoProps}>
<TextBox4 {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<Input2 {...usernameProps} {...usernameCb} {...usernameIoProps}/>
</Flex4>
<Flex4 {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<TextBox4 {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<Input2 {...passwordProps} {...passwordCb} {...passwordIoProps}/>
</Flex4>
<Button4 {...Button48Props} {...Button48Cb} {...Button48IoProps}/>
</Flex4>
</Flex4>
</Flex4>
</Flex4>
</Flex4>
  </>);
}
