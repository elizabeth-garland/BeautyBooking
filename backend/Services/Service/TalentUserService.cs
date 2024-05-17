using Models.DTOs;
using Repositories.Interface;
using Services.Interface;

namespace Services.Service;

public class TalentUserService : ITalentUserService
{
    private readonly ITalentUserRepository _talentUserRepository;
    public TalentUserService(ITalentUserRepository talentUserRepository)
    {
        _talentUserRepository = talentUserRepository;
    }

    public async Task<TalentUser> GetUserByIdAsync(string userId)
    {
        return await _talentUserRepository.GetUserByIdAsync(userId);
    }
}