if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "/Users/techcapanicus/Documents/Web-Projects/musicAi/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/706d5f5i/obj/x86/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/techcapanicus/Documents/Web-Projects/musicAi/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

