package com.musicai

import android.content.Context
import android.media.MediaPlayer
import android.net.Uri
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.musicai.NativeMusicPlayerSpec

class NativeMusicPlayerModule(
    reactContext: ReactApplicationContext
) : NativeMusicPlayerSpec(reactContext) {

    private var mediaPlayer: MediaPlayer? = null

    override fun getName() = NAME

  
    override fun play(value: String) {

        Log.d(NAME, "Play called with: $value")

        try {

            // Stop previous audio
            mediaPlayer?.stop()
            mediaPlayer?.release()
            mediaPlayer = null

            val resId = reactApplicationContext.resources.getIdentifier(
                value,
                "raw",
                reactApplicationContext.packageName
            )

            if (resId == 0) {
                Log.e(NAME, "Audio file not found in raw folder: $value")
                return
            }

            mediaPlayer = MediaPlayer.create(reactApplicationContext, resId)

            mediaPlayer?.isLooping = true   // good for long note / riyaz
            mediaPlayer?.start()

            Log.d(NAME, "Audio started")

        } catch (e: Exception) {
            Log.e(NAME, "Error playing audio: ${e.message}")
        }
    }


    companion object {
        const val NAME = "NativeMusicPlayer"
    }
}