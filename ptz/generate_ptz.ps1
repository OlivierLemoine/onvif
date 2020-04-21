$GSOAP_path = "\\Mac\Home\Downloads\gsoap-2.8\gsoap\"
$GSOAP_bin_path = "$($GSOAP_path)bin\win64\"
$WSDL_to_header = "$($GSOAP_bin_path)wsdl2h.exe"
$SOAP_cpp = "$($GSOAP_bin_path)soapcpp2.exe"
$WSDL_path = "https://onvif.org/ver20/ptz/wsdl/ptz.wsdl"

# Invoke-Expression "$($WSDL_to_header) -O4 -P -x -o onvif.h $($WSDL_path)"
Invoke-Expression "$($SOAP_cpp) -2 -j -I $($GSOAP_path)/import -I $($GSOAP_path) onvif.h -x"