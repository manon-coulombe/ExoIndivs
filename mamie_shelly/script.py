def BinaryToAlphanum(binary):
    binary_int = int(binary, 2)
    byte_number = binary_int.bit_length() + 7 // 8

    binary_array = binary_int.to_bytes(byte_number, "big")
    return binary_array.decode()

mdp1 = BinaryToAlphanum("01101010001001110110100101110010011000010110100100100000")

def decimalToHex(decimal):
    return hex(decimal)

mdp2 = decimalToHex(3499)

def hexToAlpha(hex):
    return bytearray.fromhex(hex).decode()

mdp3 = hexToAlpha("65722073757220766f7320746f6d6265732021")

print(mdp1 + mdp2 + mdp3)