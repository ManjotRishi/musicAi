package com.musicai

import kotlin.math.abs
import kotlin.math.log2

data class SwaraResult(
    val swara: String,
    val cents: Double,
    val stability: Double
)

/**
 * Converts pitch frequency into Indian classical swaras.
 */
class SwaraDetector {

    private val pitchBuffer = ArrayDeque<Float>()

    private val baseSa = 240.0  // User base pitch

    private val swaraMap = mapOf(
        "Sa" to 0,
        "Re" to 200,
        "Ga" to 400,
        "Ma" to 500,
        "Pa" to 700,
        "Dha" to 900,
        "Ni" to 1100
    )

    /**
     * Smooth pitch using moving average
     */
    fun smoothPitch(pitch: Float): Float {

        pitchBuffer.add(pitch)

        if (pitchBuffer.size > 5)
            pitchBuffer.removeFirst()

        return pitchBuffer.average().toFloat()
    }

    /**
     * Detect swara from pitch frequency
     */
    fun detectSwara(freq: Float): SwaraResult {

        val cents = 1200 * log2(freq / baseSa)

        var closestSwara = "Sa"
        var minDiff = Double.MAX_VALUE

        for ((swara, value) in swaraMap) {

            val diff = abs(cents - value)

            if (diff < minDiff) {
                minDiff = diff
                closestSwara = swara
            }
        }

        val stability = calculateStability()

        return SwaraResult(
            closestSwara,
            cents,
            stability
        )
    }

    /**
     * Calculate pitch stability based on recent values
     */
    private fun calculateStability(): Double {

        if (pitchBuffer.size < 2) return 0.0

        val avg = pitchBuffer.average()

        val variance = pitchBuffer
            .map { (it - avg) * (it - avg) }
            .average()

        return 1.0 / (1.0 + variance)
    }
}