import React from "react"
import anime from "animejs"

function Amazing() {
  React.useEffect(() => {
    anime({
      targets: "#amazing path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250
      },
      direction: "alternate",
      loop: true, //false, //true,
    })
  }, [])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="297mm" width="210mm" version="1.1" viewBox="0 0 210 297" id="amazing">
      <g
        ariaLabel="Amazing"
        style={{
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          fontVariantCaps: "normal",
          fontFeatureSettings: "normal",
        }}
        fill="none"
        stroke="#e710bf"
        strokeWidth="0.465"
      >
        <path
          style={{
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontVariantCaps: "normal",
            fontFeatureSettings: "normal",
          }}
          d="m52.852 93.88h-8.1979l-1.8604 5.0602h-1.5999l6.8337-18.058h1.4511l6.8337 18.058h-1.5875zm-7.7267-1.3022h7.243l-3.6215-9.8351z"
        />
        <path
          style={{
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontVariantCaps: "normal",
            fontFeatureSettings: "normal",
          }}
          d="m59.983 85.521 0.04961 2.1828q0.74414-1.2154 1.8604-1.8231 1.1162-0.60772 2.4805-0.60772 3.175 0 4.0308 2.6045 0.71934-1.2526 1.9224-1.9224 1.203-0.68213 2.6541-0.68213 4.316 0 4.4028 4.7129v8.9545h-1.4883v-8.8429q-0.0124-1.7983-0.78135-2.6665-0.75654-0.86816-2.4805-0.86816-1.5999 0.0248-2.7037 1.0418-1.1038 1.0046-1.2278 2.4557v8.8801h-1.4883v-8.9545q-0.0124-1.7239-0.81856-2.5673-0.79375-0.85576-2.4557-0.85576-1.4015 0-2.4061 0.80615-1.0046 0.79375-1.4883 2.3688v9.2025h-1.489v-13.419z"
        />
        <path
          style={{
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontVariantCaps: "normal",
            fontFeatureSettings: "normal",
          }}
          d="m89.625 98.94q-0.22324-0.63252-0.28525-1.8728-0.78135 1.017-1.9968 1.5751-1.203 0.5457-2.5549 0.5457-1.9348 0-3.1378-1.079-1.1906-1.079-1.1906-2.7285 0-1.9596 1.6247-3.1006 1.6371-1.141 4.5517-1.141h2.6913v-1.5255q0-1.4387-0.89297-2.2572-0.88057-0.83096-2.5797-0.83096-1.5503 0-2.5673 0.79375t-1.017 1.91l-1.4883-0.0124q0-1.5999 1.4883-2.7657 1.4883-1.1782 3.6587-1.1782 2.2448 0 3.5347 1.1286 1.3022 1.1162 1.3395 3.1254v6.35q0 1.9472 0.40928 2.9146v0.14883zm-4.6633-1.0666q1.4883 0 2.6541-0.71934 1.1782-0.71934 1.7115-1.9224v-2.951h-2.655q-2.22 0.02481-3.4727 0.81856-1.2526 0.78135-1.2526 2.158 0 1.1286 0.83096 1.8728 0.84336 0.74414 2.1828 0.74414z"
        />
        <path
          style={{
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontVariantCaps: "normal",
            fontFeatureSettings: "normal",
          }}
          d="m95.727 97.688h8.7188v1.2526h-10.559v-1.092l8.139-11.05h-7.891v-1.278h9.7606v1.1038z"
        />
        <path
          style={{
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontVariantCaps: "normal",
            fontFeatureSettings: "normal",
          }}
          d="m108.76 98.94h-1.4883v-13.419h1.4883zm-1.7487-17.301q0-0.42168 0.27285-0.70693 0.27285-0.29766 0.74414-0.29766t0.74414 0.29766q0.28525 0.28525 0.28525 0.70693t-0.28525 0.70693q-0.27285 0.28525-0.74414 0.28525t-0.74414-0.28525-0.27285-0.70693z"
        />
        <path
          style={{
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontVariantCaps: "normal",
            fontFeatureSettings: "normal",
          }}
          d="m114.22 85.521 0.0496 2.2944q0.75654-1.2402 1.8852-1.8852 1.1286-0.65732 2.4929-0.65732 2.158 0 3.2122 1.2154t1.0666 3.6463v8.8057h-1.4759v-8.8181q-0.0124-1.7983-0.76894-2.6789-0.74414-0.88057-2.3936-0.88057-1.3767 0-2.4433 0.86816-1.0542 0.85576-1.5627 2.3192v9.1901h-1.4759v-13.419z"
        />
        <path
          style={{
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontVariantCaps: "normal",
            fontFeatureSettings: "normal",
          }}
          d="m126.15 92.107q0-3.1502 1.3891-4.9857 1.4015-1.8479 3.7951-1.8479 2.7409 0 4.1672 2.1828l0.0744-1.9348h1.3891v13.146q0 2.5921-1.4511 4.1052t-3.9315 1.5131q-1.4015 0-2.6789-0.63252-1.265-0.62012-1.9968-1.6619l0.83096-0.89297q1.5751 1.9348 3.7455 1.9348 1.8604 0 2.9022-1.1038 1.0418-1.0914 1.079-3.0386v-1.6867q-1.4263 1.9844-4.1548 1.9844-2.3316 0-3.7455-1.8604t-1.4139-5.0229zm1.5007 0.26045q0 2.5673 1.0294 4.0556 1.0294 1.4759 2.9022 1.4759 2.7409 0 3.8819-2.4557v-6.2384q-0.5209-1.2898-1.5007-1.9596-0.97979-0.68213-2.3564-0.68213-1.8728 0-2.9146 1.4759-1.0418 1.4635-1.0418 4.3284z"
        />
      </g>
    </svg>
  )
}

export default Amazing
