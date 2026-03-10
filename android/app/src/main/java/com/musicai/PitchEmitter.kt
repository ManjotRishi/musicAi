package com.musicai

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.DeviceEventManagerModule

/**
 * Emits pitch data events to React Native.
 */
class PitchEmitter(
    private val reactContext: ReactApplicationContext
) {

    fun emitPitchData(
        pitch: Float,
        cents: Double,
        swara: String,
        stability: Double
    ) {

        val map = Arguments.createMap()

        map.putDouble("pitch", pitch.toDouble())
        map.putDouble("cents", cents)
        map.putString("swara", swara)
        map.putDouble("stability", stability)

        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit("pitchDetected", map)
    }
}