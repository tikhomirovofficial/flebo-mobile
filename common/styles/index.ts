import { CSSProperties } from "react";
import { StyleSheet } from "react-native";

const cs = StyleSheet.create({
    modal: {
        position: "absolute", height: "100%", top: 0, width: "100%"
    },
    pRel: {
        position: "relative"
    },
    dF: {
        display: "flex",
    },
    focusedInput: {
        borderColor: "#0BA0B5"
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "#F3F3F3",
    },
    fRowBetw: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    inputField: {
        paddingVertical: 16,
        paddingHorizontal: 22,
        borderStyle: "solid",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#E2E2E9"
    },
    fColumn: {
        display: "flex",
        flexDirection: "column"
    },
    fRow: {
        display: "flex",
        flexDirection: "row"
    },
    fCenterCol: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
    fCenterRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    fColumnBetw: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    fAlCenter: {
        alignItems: "center"
    },
    jcCenter: {
        justifyContent: "center"
    },
    blueLink: {
        color: "#0BA0B5",
        textDecorationLine: "underline"
    },
    modalCloseText: {
        paddingVertical: 6,
        paddingRight: 10
    },
    textRed: {
        color: "#F40F0F"
    },
    errBorderColor: {
        borderColor: "#F40F0F",
        borderWidth: 1
    },
    filledBorderColor: {
        borderColor: "#454545",
        borderWidth: 1
    },
    bgRed: {
        backgroundColor: "#F40F0F"
    },
    fwBold: {
        fontFamily: "MontserratBold",
    },
    bgDisabled: {
        backgroundColor: "#F0F0F0"
    },
    count: {
        paddingHorizontal: 5,
        paddingVertical: 0,
        borderRadius: 50,
        justifyContent: "center",
        marginTop: 2,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    countText: {
        textAlign: "center",
        color: "#FFCF00",
        fontWeight: "600"
    },
    fzXXS: {
        fontSize: 10
    },
    fzXS: {
        fontSize: 12
    },
    fzS: {
        fontSize: 14
    },
    fzM: {
        fontSize: 16
    },
    fzXL: {
        fontSize: 20
    },
    fwMedium: {
        fontWeight: "500",
        fontFamily: "MontserratMedium",
    },
    fwSemi: {
        fontFamily: "MontserratSemiBold"
    },
    wBlockShadow: {
        shadowColor: "rgba(19, 101, 101, 0.3)",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        backgroundColor: "white",
        elevation: 4,
    },
    yellowBtn: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 6,
        textAlign: "center"
    },
    mainBtn: {
        height: 60,
        paddingHorizontal: 28,
        borderRadius: 18,
        textAlign: "center",
    },
    lightGray: {
        borderRadius: 2,
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    flexOne: {
        flex: 1
    },
    searchInput: {
        paddingVertical: 5
    },
    bgYellow: {
        backgroundColor: "#FFCF00",
    },
    fClickableGray: {
        fontWeight: "500",
        color: "#D7D7D7"
    },
    title: {
        fontSize: 48,
        fontFamily: "ProximaNovaRegular",
    },
    colorWhite: {
        color: "#fff"
    },
    colorBlack: {
        color: "black"
    },
    colorDark: {
        color: "#4D4D4D"
    },
    colorRed: {
        color: "#F40F0F"
    },
    colorGray: {
        color: "#A9A9A9"
    },
    txtCenter: {
        textAlign: "center"
    },
    spaceXXL: {
        gap: 40
    },
    spaceXL: {
        gap: 32
    },
    spaceL: {
        gap: 24
    },
    spaceM: {
        gap: 16
    },
    spaceS: {
        gap: 8
    },
    spaceXS: {
        gap: 4
    },
    circle: {
        borderRadius: 1000
    },
    fReg: {
        fontFamily: "RalewayRegular"
    },
    fMed: {
        fontFamily: "RalewayMedium"
    },
    fSemi: {
        fontFamily: "RalewaySemiBold"
    },
    fBold: {
        fontFamily: "RalewayBold"
    },
    text: {
        fontSize: 14,
        fontFamily: "RalewayRegular"
    },
    inputText: {
        fontSize: 16,
        fontFamily: "RalewayMedium"
    }

})
export {
    cs
}