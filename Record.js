class Record {
  constructor(
    CodeName,
    AbilityRank,
    Affiliation,
    HairColour,
    Ethnicity,
    AtMotherBase,
    DateJoined
  ) {
    this.CodeName = CodeName;
    this.AbilityRank = AbilityRank;
    this.HairColour = HairColour;
    this.Ethnicity = Ethnicity;
    this.AtMotherBase = AtMotherBase;
    this.DateJoined = DateJoined;
  }

  newAtBaseStatus(AtMotherBase) {
    this.AtMotherBase = AtMotherBase;
  }

  newAbilityRank(AbilityRank) {
    this.AbilityRank = AbilityRank;
  }
}

export default Record;
