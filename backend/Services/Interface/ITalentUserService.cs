using Models.DTOs;

namespace Services.Interface
{
    public interface ITalentUserService
    {
        Task<TalentUser> GetUserByIdAsync(string userId);
    }

}