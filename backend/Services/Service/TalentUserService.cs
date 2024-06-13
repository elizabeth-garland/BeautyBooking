using backend.Services.Interface;
using backend.Models.DTOs;
using backend.Repositories.Interface;

namespace backend.Services.Service
{
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
}