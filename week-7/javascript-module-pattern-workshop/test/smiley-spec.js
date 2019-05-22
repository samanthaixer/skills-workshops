describe("smiley", function(){
  it("returns a smiley on the end of a string", function(){
    expect(smiley("hello")).toEqual("hello :)")
  })
})
