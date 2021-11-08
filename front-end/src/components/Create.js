import { useState } from "react"

function Create({ currentUser }) {
  const [hotDog, setHotDog] = useState(null)
  const [mustard, setMustard] = useState("")
  const [ketchup, setKetchup] = useState("")
  const [onion, setOnion] = useState("")
  const [ketchupImageUrl, setKetchupImageUrl] = useState("https://lh3.googleusercontent.com/56FFbgFRSz-fVtdQad5apiwDXc7hebh-vW9wYYI1yDlmDQk_q5OPZ28WZqriDaYoCy7W3k61wf7h-sVwIAFbSLh9por7_cV92-2TYdjHLqu6SjtNGaW8Y3wg7e71XEEy010wJRURAwH32qnrmFli3GoetT71Tw4h3p3jp98v6fGzCohSpjjwLWbEp68EwJQQJka-3-UKOmMNM3Yy8hKSQMKJoqlzn2dMiCZM1V0XTFL9y8PcrTohZgsuq_c-wDd1RzkHJl_3WppTA7GYSk7kgpx4RR3kQAGx3vOzPjE5d-5C7ZtYxxsr9QnULJ0m3dO3UsPIK5LR3GoSJSaRHv5UHjm28W0o_q_CEo1KId3ZxmKDNS59VcBsalU3PeoRGKivEC6jYX_GS2RdxC3sfhPq-5c7Pxdhsd5OYb8UWHzyOCABm15u10ipf9R3RudIsCag52JqNTMQZcKQFaLk5NT2JstmHUuJeaxD1_aUFqidSsCTq5PliyWvRoyLiSE2AC-ADku2H1_TXPeONH7M1ANYIn2u0c0vJ-FiDOjM6YzOpuY1cP9g07yfm0MpEDkPnMdHA-CyaTgQrhn9DEK4rD462r5mlqfEqYHemVggf5ZfgrWx2HIpcg-OgY4Kv81Xa8IveLROrs-3yhATme_CmN8QqIVdG6spNzIHuGPuv0ddy7sH9YyGbXpYQNlLb6XLzr1fzZb5xLac03xcF_Ao0AB8LPI=w139-h429-no?authuser=0")
  const [mustardImageUrl, setMustardImageUrl] = useState("https://lh3.googleusercontent.com/x696S2yNR4hpbeVUvgW1xIUyULr0jK8IIFlQwBB6ZZ_2l_FGsowMl2m-f3vqLSXQDBMlg_47zPsDEz_QWkpQtsG4EW4Ak7rmQXOnAyrz0ajSZ7GKG7IQ8tImetLAEeF0chnaJXT2-sbdIx6Kkw6G1Nb1sAypIgzn--hfSPWe5HeIlv03GtCU_hUZySHk2hNjHNSAh3QR13PWfa28bNxmz-LGj_WSjxQGAUd9Yi4ZzET7meTkwKFPl4jVb70_-BsEhJKuI1cJGiaK-NA-ZWksC-TEu_B0XfBJPixvbRRxRgM5E7m3kOM9-Ls5Gxn0R0Vp336OajENvH7nHr7CNuR8hjrmy4IaWB1lSRsXfgGR17iwYU4r1BXX-umBiMayKK9y1A0pmt8WBn2x9l94a2OlDwNQYvSIMPYxUJqR2jU8DCKdf4hFj2HwCOH_IVCZcRgiOJhxe00i2Ka6YyWSgUBezdTmNxSviYjrJVqZ5jGkEA49YOqJ-89CzzO5T3yjWM2i_p0FgfA5XjMURMShERz_hJyo-kT8mROLMWdp2SXxlXYWd_zrm9Gs9pyljImmnBJlTJQCO8jnyGGJEV0RV81YYsi7WvSY_g3Hu6FkElqbU0Gro0klTRRZeOod59cDsiTvnVi91_PbSC8ZNo1zxtche5ykKOQqbMDBJtt7kjUUhVvqYSLmOrfKqg6XyGnNgkbKogvuOnMZmXlq1UnHXB05sPY=w139-h425-no?authuser=0")
  const [onionImageUrl, setOnionImageUrl] = useState("https://lh3.googleusercontent.com/CbRvbhHWpbMdKEPBYZM1HHmvtE-RgLcuQSky8JuEywoCE0UO6r-tbhhocLZgM0SZb-XT-l2H13qEo1T3GX3LvVCJQ3uB6hVUjs3MjlPiob_W9UHLvFz1LRIKfAvceytFExXksf7CjtdL3Geze4aLMIka3F0XQyiVyc-qDVbRoKhGhLRvIKqePYgNUsk6yMNRc84USDs91D8xPoKKVNBx7oe_Kcy5QEcCcqXLRUcVtSidCj1OAWC5FbdvNeIQHJklcsB41CuScmNXkIDiTGZY8B8OhoMw4T0lflSr9wUfQXVXrcwpmQTN9JGu5UXmsQgtLBrmS07oI1rfHkkTKtcC47jjThTg2k943ledOpXhsAyIZyz7uGklWupJM6hoxUWPEnLSeYbncPNzCJt-x7Y5_SVKvN2zjVStueribz-s8ZWrOdBf-2JEINWpFhhaireCG1ZZyyWXbjS4hY_RAZj8YihLy672-PwF-nd4XYpittBhBTI4pr4SH-E4PUvR-5YERVx00yZNorlsL4TLz8TrSIZf5BzuwelQhlhR339XCh85ZrsBVjLVLP1vRG6vSpv1Ekwo9mGexn3UdRgc2Pd5Wa6frAXAR6LZuwecPlozAX6t3xdkr_kLT7amof6CIQqc6Br1owIVDbIPbE-VsXHVaJeI1QLWzsS0oGGiD8TKsy1XHg0QcJhfp9_SJ4NVFrQg-X8quZA0qMNBo-d6sQBK9ik=w580-h512-no?authuser=0")


  const ketchupClick = (e) => {
    setKetchup(e.target.name)
    setKetchupImageUrl("https://lh3.googleusercontent.com/qbjTb9aapFJwMqgirLTVB5HDKP04_nVnLy9pcxrmNkd_5gNlJHmqzGTnZbiPTGDtg8eoj2e88_i_o8nJYTNxBmgbOfbi8E0xliMm8PLI6wtQkPVo79qLnmemyoS7zjgMpbcLw8BP7FWkd7wXV696_R0OKLk9oTJ6Z34jwVpDhoU2oqIh9XctecYQyT3sV-UL6kpnn8MjEqEHZ95BYc3CcsndQ7uspaaJ5vFtDLeAAKX9BFYs-K8T_NRKS5Q8zgfePqfYwmxJnKLrK86m4_i2v9TLl2GZsn7957ChyILw3qjvvmbQ7TSX_fQpJnVfMaPEhFmHd0sX3477P3OCSc_9O83jJo7_UW-m6dXbAbJXcDmZuaAyKc-6brfpLKcuB9HnQXfGn9Jd2s6d0twTCjp2uD3xcRppe7NDlU6IeEn-Xjbcof0FxFFfNPA68smEIJnIgMOkD2G_ZzIYeO5UEofzvaIbE-Ui_Qfe9L4xT202_J8VTtafcKdEeN502EkaBBc6Yk-2NAfD6dqmvAvgzj04AuzibA8F1stb-rcO_oe20OkziVz1OsC_o3UpGBL-zEv1Q5bEAhJ0xLugUY8-QzZ511xAzienn5wDqtRYbQAZgV2XFSNn6z9QNS-l6A0BOJQWlseqKPaCbX770LjsmBHRqAI0V5uV518y9OI56T_tdb5yU2Fnos3uK55Xs7UuuUjcqdUOPt3iq4qlF_YDaO9eQco=w139-h429-no?authuser=0")
  }

  const mustardClick = (e) => {
    setMustard(e.target.name)
    setMustardImageUrl("https://lh3.googleusercontent.com/H7vD4qlPXts1Gw3aHWc4rnMnzQXgOsuLdCNVZ1cjYWoXk7cI2pTlQIYTmkPSP5X_x2lLCtti-bTWF9wgh6OPBzMLyG0pQc7SRYJtG4TPGVQgI4aiZSHvn-jHoFuE8CdBIhvb6jwfwiYVBGRf8uuobGqI2cF4eWNZNw5p05oY98I4LmtGJxhLPj1dJTSeBwmmLzBNjrOCU2os-GVWkXrA7HiPcKBCEz7sBVA4k0_l1CmIKK69fZIKxkew_5qS9If18NhSefaw2W9JGDdSaRwx3IinQMbEznjXt4WZTynBhjaSIjLIaCIBhlOMQhUui90VOX_J4hk_yLvaZSlK4JvVKlx6NnK0sgf3hJQE5X7fpM5Atuc0xJscj5WLQclJ4mka0eXdIGhWlGL1QhtDJ_qkVZBhf75qP7xbbJDfLV61azQ4m08ZYL_fo9GHIe6woY5q4QbDQVXG9J_qg5sIxTXULSZ-DxN-rxeKY4I1Onxxqsz_xwlz6bEfdsRN-Hc_vCUocRMCy0L5VCWeRsJErINB1IS-28oKRlFw-BsBk-VHaXJch9C0fKIeNSDK_x1LBCyTUkMOXxjlQyL6U2nRpLmsMrkViicz1-hHSsbmRHtGHe8sodA87ttmZWXIduS5dN7B_WJkh2ijE4jQE_oTL-YNqXLlRVtx2YlWgKoUtWAlFCEdLnRLKVx4Dr5xsvmsNY99LuOmvwBa2C6SGVMJtp6GY2s=w139-h425-no?authuser=0")
  }

  const onionClick = (e) => {
    setOnion(e.target.name)
    setOnionImageUrl("https://lh3.googleusercontent.com/bTq9u-QM-ZT4tn4VPOw_74v43OzIRcaPgxa28Hy1GGrOrb2LnrwbRZl674iUwzvjE2EusLJXM1PNT7A7DnAYdudQ1n_wKZlhTytjiR5EZWT0sRA2rS8wxbG4UPjTgniuNWpIJ_cC7HbxTUEyWGXuhnh9FbOKoekHkWeDYyr68fSdekfVF9w0_5TTu70YXr1edrUOgIpoEcAs2VVPUIZZyd2C5D_EYOEMDoOAIzxMW7-mZ4lQk5jBy6KfYss_eQi2qrr8GizwWDwxiv4485jvR88AwUrqM2j9QJisfFRPAHcAp5sN7dMvtezYFnz6PLaKhcEV8aSE-aJH4DYIbl9Ri9-JILg8K0ZESgz5sMxyB6Jq9e5VWOiTmtJi1_8JdAZ0SOIeN-HUxxtrsR00ULti6eQDoBa7pfXaS_Qj-EAzsV71YaAr2TesOsXK7kwpBuCMWlrE5KXOl-rkPxg7famz73Qfgd3SoZyho0Fk1RRyIbZh-lO0c3HLvYzPHs2CdpGf-b4pi4yqWA-OrvfKpxR8pPK4N9LMxBD1Vm3_NAR-d18gtunQAALS7vtqBpe3S2xVh6NY_HkeitAwG1LXOhJFQ2yx37Fu8ZXVVYu6jFnJoCAQjtjd0on2RcskeI5MpjZPefCienCJorMJKtOHABRnpdhYJ6Ln4cSdL8Y_k4QiQe-Rt1DDdrEkLppDv6n7pwKm1-jxHN11dtlcpXGdg2Xl1ZM=w903-h680-no?authuser=0")
  }

  const handleHotDogSubmit = (e) => {
    e.preventDefault()
    fetch('/hot_dogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        dog_style: "All-Beef",
        toppings: `${onion}`,
        condiments: `${ketchup}, ${mustard}`,
        restaurant_id: 8,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(setHotDog)
    e.target.reset()
  }

  return(
    <div>
      <h1>Create Your Own Hot Dog!</h1>
      <img 
        src={ketchupImageUrl} 
        className="create-icon"
        alt="ketchup" 
        name="Ketchup" 
        onClick={e => ketchupClick(e)} 
      />
      <img 
        src={mustardImageUrl} 
        className="create-icon"
        alt="mustard" 
        name="Mustard" 
        onClick={e => mustardClick(e)} 
      />
       <img 
        src={onionImageUrl} 
        className="create-icon-onion"
        alt="onion" 
        name="Onion" 
        onClick={e => onionClick(e)} 
      />

      <form onSubmit={e => handleHotDogSubmit(e)}>
        <label>Name: </label>
        <input type="text" name="name" />
        <button>Add Hot Dog</button>
      </form>

      {hotDog ? 
      <div>
        <h3>Name: {hotDog.name}</h3> 
        <p>Toppings: {hotDog.toppings}</p>
        <p>Condiments: {hotDog.condiments}</p>
      </div>
      : null}

      {mustard ? <img src="https://lh3.googleusercontent.com/TSgneWK-3Btyow2E04xPoSmyYuhr_63CHkBCpTZKTGHdFgrVK_RWRa3ukPMg58Sz2C2pv-z4mwd6Hzz_4rCvEQPgrgJwl6mfq0yDNrXRVN4tu7THDFHqXvjsuGNllj-qgi4MoQbDitnc0BXDa9EvwVu7JeiAmcYBsbArQk8mJaGaKMy6r76VbQgREo5Plhkl8ik46NEQrJGnDgez6DJxzNJm7p-HTJdjKaWPtiagCk1vn40j6JPtYvwogyrOUnWoKs168AGQzwaC1epak9us_6UUFyRoEVd22fekLmCGDh_jLBJ0Lb9Fnva0jgb9GhooaxA9C9F8RZVL5uAbT14b9Fgo4RJi7Qt1Mst7FyOJfooSFYSF4OxffLFFNXDiEh1AhvC8rqvL2G3XzyZBsWcMikA7YfIHKq-s0Aiw01eciUdeq1hm8JoWMsFFIrAoeKNgGKvxJcFO666WyQsHzuyS6JEAfAxkHug49qZ57lwscn1zdZLoHOiEkDqWU0iDz39PVxQgfcwWEao6iCd2AGGa306Sg1BTen0EWqJQYM10jjLi9GHqYJhDa9CBVkzXuEfc_hDeROkktlPZTdNBJwOdtVe9I3G1Kxzg9Ey1qdWQ-FeU_AkHDNNrt-KG8bFi33OleBYAkiXQGaQ-EJYnaTRVJPjtciAeSRxeTO4jciP_d3UAclwtY1lVgy8krpZKRFZM7Gq4XEk4ZichRIDLo40PpTA=w607-h163-no?authuser=0" alt="mustard_squiggle" alt="mustard-squiggle"/> : null }
      {ketchup ? <img src="https://lh3.googleusercontent.com/aFNC3GV_v_enPLS17BU9JiCS99kkUXWwrLm3xzbnK1tG9DS-dHH--NMLIiDuXWm2DhPkqpsP8mQEW3Oas9bN_UumJtdrxCZ8_hnnzlaas7hhnYe6GwEOt9dDKkRIIZTcn3V2jIaIlHPIyG6QT1biG_P7E1kUIDifRzFHeEkkYEwV-7DckwoKCz4_DbNz4dg91K2mM5L9e2hF5oeY_RoBAfGvIpVwHe-DtNoP-7k4sV7Gtff9kpYTJ_JPkjqxfSkSNUwCMt2xAcHg_WcmDNFKOh9ZENbu2Xg5aQW_oComtLIdwXtLeb8DacnOf37rGOaGp-IyyKXBqSCBNoAMg5LfifmvLdLT_TMClaeq-ZaxRGbZ9JCNW71Q0Xpy7EBgAzJYu7Aybli-PMKJSyv-CjeLozXYmfo2zT8h5Th1cLKFhKP4yYWNnXJTOch8DWo0y6rciDul4oMhcNQecLETdHCZhFayEdFa9yKFQGfTQMWJ9TISZqOi7gObznd26aeT1xCHCqUnxUBPOwkTaRjZX9ku7fLDn8Qy8HZ8-ZwSH8ve7GDrzfzMwY8fxYuMm2TLQKjoiagc4BllyepXm5U7y2gfqfe_sUT-apYulO4VsMaX6J11It8RLgV6quAuO8C-F6TXBdfhDxtDtJXIAqqewo9Vu5KFlKVXoaHEMWjEKv166PzcoxSJwaXaVio3OEE9So8Z3hcfaYgswoGL9mtI5MCCaqY=w588-h139-no?authuser=0" alt="ketchup-squiggle"/> : null }
      <img src="https://www.dairyqueen.com/dA/0ee9fa67f7/classic-hot-dog.png" alt="plain-hot-dog" className="plain-hot-dog"/>

    </div>
  )
}

export default Create