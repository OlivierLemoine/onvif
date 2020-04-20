wsdl2h -O4 -P -x -o onvif.h https://onvif.org/ver20/ptz/wsdl/ptz.wsdl 

soapcpp2 -2 -j onvif.h
